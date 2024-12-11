import React, { useState, useEffect } from 'react';
import { MessageCircleHeart } from 'lucide-react';
import { PERSONAL_MESSAGES } from '../../utils/constants';

export default function MessageCard() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % PERSONAL_MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Just For You</h2>
      <div className="min-h-[100px] flex items-center justify-center">
        <div className="text-center">
          <MessageCircleHeart className="mx-auto mb-4 text-pink-500" size={32} />
          <p className="text-xl font-medium text-purple-700 animate-fade-in">
            {PERSONAL_MESSAGES[currentMessage]}
          </p>
        </div>
      </div>
    </div>
  );
}