import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Background() {
  const { currentTheme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <div className={`absolute inset-0 ${currentTheme.background}`} />
      <div className="absolute inset-0 animate-pulse opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${currentTheme.cardBg}`}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
    </div>
  );
}