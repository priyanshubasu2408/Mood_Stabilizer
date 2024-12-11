import type { Theme } from '../types/theme';

export const themes: Theme[] = [
  {
    id: 'pastel-bliss',
    name: 'Pastel Bliss',
    background: 'bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100',
    cardBg: 'bg-white/80',
    primary: 'from-purple-500 to-pink-500',
    secondary: 'from-pink-400 to-purple-400',
    text: 'text-purple-800',
    accent: 'text-pink-500'
  },
  {
    id: 'starry-night',
    name: 'Starry Night',
    background: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900',
    cardBg: 'bg-white/10',
    primary: 'from-indigo-500 to-purple-500',
    secondary: 'from-purple-400 to-blue-400',
    text: 'text-white',
    accent: 'text-indigo-300'
  },
  {
    id: 'floral-paradise',
    name: 'Floral Paradise',
    background: 'bg-gradient-to-br from-rose-100 via-green-100 to-yellow-100',
    cardBg: 'bg-white/80',
    primary: 'from-rose-500 to-green-500',
    secondary: 'from-green-400 to-yellow-400',
    text: 'text-rose-800',
    accent: 'text-green-500'
  }
];