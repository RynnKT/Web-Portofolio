import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../locales/en';
import { id } from '../locales/id';

const LanguageContext = createContext();

export const translations = { en, id };

export function LanguageProvider({ children }) {
  // Check local storage or default to 'en'
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // A simple function to get nested keys (e.g., 'hero.btn_projects')
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    // Fallback to en if missing in id
    if (value === undefined && lang !== 'en') {
      value = translations['en'];
      for (const k of keys) {
        if (value === undefined) break;
        value = value[k];
      }
    }
    return value !== undefined ? value : key;
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
