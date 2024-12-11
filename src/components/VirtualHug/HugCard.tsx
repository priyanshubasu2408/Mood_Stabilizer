import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export default function HugCard() {
  const [isHugging, setIsHugging] = useState(false);

  const giveHug = () => {
    setIsHugging(true);
    setTimeout(() => setIsHugging(false), 2000);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Virtual Hug</h2>
      <div className={`transition-transform duration-500 ${isHugging ? 'scale-150' : 'scale-100'}`}>
        <Heart
          size={64}
          className={`mx-auto ${
            isHugging
              ? 'text-pink-500 animate-pulse'
              : 'text-gray-400 hover:text-pink-500 transition-colors'
          }`}
          fill={isHugging ? 'currentColor' : 'none'}
        />
      </div>
      <button
        onClick={giveHug}
        disabled={isHugging}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        {isHugging ? "Sending you love! 💖" : "Give me a hug! 🤗"}
      </button>
    </div>
  );
}