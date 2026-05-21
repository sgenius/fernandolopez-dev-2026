import React, { createContext, useState, useCallback } from 'react';
import { Language, Translations, translations } from '@/i18n/translations';

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  toggle: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggle = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
