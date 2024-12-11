import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const compliments = [
  "You're doing amazing!",
  "Your smile lights up the room!",
  "You make the world a better place!",
  "You're stronger than you know!",
  "Your potential is limitless!",
  "You inspire others!",
  "You're making progress!",
  "Your kindness matters!",
  "You're absolutely wonderful!",
  "You're capable of amazing things!"
];

export default function ComplimentCard() {
  const [index, setIndex] = useState(0);

  const nextCompliment = () => {
    setIndex((prev) => (prev + 1) % compliments.length);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Daily Compliment</h2>
      <div className="min-h-[100px] flex items-center justify-center">
        <p className="text-xl text-center font-medium text-purple-700">
          {compliments[index]}
        </p>
      </div>
      <button
        onClick={nextCompliment}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Heart size={20} />
        Next Compliment
      </button>
    </div>
  );
}