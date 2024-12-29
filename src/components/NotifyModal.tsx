import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sendNotificationEmail } from '../utils/email';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotifyModal({ isOpen, onClose }: NotifyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await sendNotificationEmail(formData);
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', interests: '' });
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-black/95 rounded-xl p-8 w-full max-w-md relative text-white border border-white/10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-300">We'll notify you when we launch.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 text-gray-300">Leave your details and we'll notify you when we launch.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium mb-1 text-gray-200">
                  What interests you most about this project?
                </label>
                <textarea
                  id="interests"
                  value={formData.interests}
                  onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 h-24 resize-none text-white placeholder-gray-400"
                  placeholder="Tell us what excites you..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {status === 'loading' ? 'Sending...' : 'Notify Me'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}