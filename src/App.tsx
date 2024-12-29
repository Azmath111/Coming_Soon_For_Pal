import React from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { NotifyButton } from './components/NotifyButton';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-30 bg-cover bg-center" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="animate-fade-in space-y-8 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Story Begins
            </h1>
            <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Join us as we embark on our journey together. A celebration of love is coming soon.
          </p>
          
          <div className="mt-12">
            <CountdownTimer />
          </div>
          
          <div className="mt-16">
            <p className="text-sm md:text-base text-gray-300">
              Be part of our special moment
            </p>
            <NotifyButton />
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}

export default App;