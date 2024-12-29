import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { NotifyModal } from './NotifyModal';

export function NotifyButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full transition-all duration-300 font-medium flex items-center gap-2"
      >
        <Bell className="w-4 h-4" />
        Notify Me
      </button>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}