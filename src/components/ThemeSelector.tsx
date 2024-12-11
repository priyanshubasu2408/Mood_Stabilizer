import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../utils/themes';

export default function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className={`${currentTheme.cardBg} backdrop-blur-sm p-6 rounded-xl shadow-xl`}>
      <h2 className={`text-2xl font-bold mb-4 ${currentTheme.text}`}>
        <div className="flex items-center gap-2">
          <Palette className={currentTheme.accent} />
          Theme
        </div>
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme)}
            className={`p-4 rounded-lg transition-all ${
              theme.cardBg
            } ${
              currentTheme.id === theme.id
                ? 'ring-2 ring-offset-2 ring-purple-500'
                : 'hover:scale-105'
            }`}
          >
            <div className={`text-lg font-medium ${theme.text}`}>
              {theme.name}
            </div>
            <div className={`h-2 rounded-full bg-gradient-to-r ${theme.primary} mt-2`} />
          </button>
        ))}
      </div>
    </div>
  );
}