'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage = 'en',
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // On mount: reconcile with localStorage and apply direction to the document.
  // This single effect replaces the old two-effect pattern that caused a double
  // translation load for returning Arabic users.
  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as Language;
    const resolved: Language =
      saved === 'en' || saved === 'ar' ? saved : initialLanguage;

    // Only update state (and trigger translation reload) if different from
    // the server-side initial value to avoid an unnecessary extra load.
    if (resolved !== language) {
      setLanguageState(resolved);
    }

    // Always sync document attributes on hydration
    document.documentElement.dir = resolved === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = resolved;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Load translations whenever language changes
  useEffect(() => {
    async function loadTranslations() {
      try {
        const translationModule = await import(`../translations/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    }
    loadTranslations();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Persist in both localStorage and a cookie (used by SSR middleware)
    localStorage.setItem('preferred-language', lang);
    document.cookie = `preferred-language=${lang};path=/;max-age=31536000;SameSite=Lax`;
    // Update document direction immediately
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Translation function with fallback to key name
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    return typeof value === 'string' ? value : key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
