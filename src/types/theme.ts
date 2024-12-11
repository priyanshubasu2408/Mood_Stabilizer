export interface Theme {
  id: string;
  name: string;
  background: string;
  cardBg: string;
  primary: string;
  secondary: string;
  text: string;
  accent: string;
}

export type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};