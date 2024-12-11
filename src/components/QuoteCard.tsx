import React, { useState } from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { QUOTES } from '../utils/constants';

export default function QuoteCard() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % QUOTES.length);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Daily Wisdom</h2>
      <div className="min-h-[100px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg italic mb-2">{QUOTES[index].text}</p>
          <p className="text-sm text-purple-700">- {QUOTES[index].author}</p>
        </div>
      </div>
      <button
        onClick={nextQuote}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <ArrowRight size={20} />
        Next Quote
      </button>
    </div>
  );
}