import React, { useState, useCallback, useEffect } from 'react';
import { Language, translations } from '@/i18n/translations';
import { LanguageContext } from '@/contexts/languageContext';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggle = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggle, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
