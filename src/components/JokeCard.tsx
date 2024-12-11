import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

export default function JokeCard() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single');
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Why did the cookie go to the doctor? Because it was feeling crumbly!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Random Joke</h2>
      <div className="min-h-[100px] flex items-center justify-center">
        {loading ? (
          <RefreshCw className="animate-spin text-purple-600" />
        ) : (
          <p className="text-lg text-center">{joke}</p>
        )}
      </div>
      <button
        onClick={fetchJoke}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <RefreshCw size={20} />
        Another Joke
      </button>
    </div>
  );
}