import React, { createContext, useContext, useState } from 'react';
import { themes } from '../utils/themes';
import type { Theme, ThemeContextType } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    // Apply theme classes to body
    document.body.className = theme.background;
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}