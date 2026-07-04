import React, { createContext, useContext, useState, useEffect } from 'react';
import { uiTranslations, translateText } from '../lib/translations';

type Theme = 'light' | 'dark';
type Language = 'en' | 'bn';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translate: (text: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // 1. Theme Management with System Auto-detection & LocalStorage Persistence
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Auto-detect system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isSystemDark ? 'dark' : 'light';
    }
    return 'light';
  });

  // 2. Language Management with LocalStorage Persistence
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language | null;
    if (savedLang === 'en' || savedLang === 'bn') {
      return savedLang;
    }
    return 'en';
  });

  // Apply Theme class to document element smoothly
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('color-scheme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('color-scheme', 'light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Handle language updates
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Translation Function Helper for UI Labels
  const t = (key: string): string => {
    const entry = uiTranslations[key];
    if (!entry) {
      return key; // Fallback to key if no entry exists
    }
    return entry[language] || entry['en'] || key;
  };

  // Dynamic content translator
  const translate = (text: string): string => {
    return translateText(text, language);
  };

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, setLanguage, t, translate }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
