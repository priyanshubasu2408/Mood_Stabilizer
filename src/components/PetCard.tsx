import React, { useState, useEffect } from 'react';
import { Image, RefreshCw } from 'lucide-react';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&h=400',
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&h=400',
  'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=400&h=400',
  'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=400&h=400'
];

export default function PetCard() {
  const [images, setImages] = useState<string[]>(FALLBACK_IMAGES);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=4');
      const data = await response.json();
      setImages(data.map((img: { url: string }) => img.url));
    } catch (error) {
      console.error('Error fetching images:', error);
      // Use fallback images if API fails
      setImages(FALLBACK_IMAGES);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Cute Cats</h2>
      {loading ? (
        <div className="flex justify-center">
          <RefreshCw className="animate-spin text-purple-600" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {images.map((url, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={url}
                alt={`Cat ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
      <button
        onClick={fetchImages}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Image size={20} />
        More Cats
      </button>
    </div>
  );
}