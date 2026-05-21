import { useContext } from 'react';
import { LanguageContext, LanguageContextValue } from '@/contexts/LanguageContext';

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
