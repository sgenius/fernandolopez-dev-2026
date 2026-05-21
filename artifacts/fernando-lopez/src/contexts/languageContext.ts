import { createContext } from 'react';
import { Language, Translations, translations } from '@/i18n/translations';

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  toggle: () => void;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
