import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { language, t, setLanguage } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'content', label: t.nav.content },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[hsl(var(--brand-b800))] shadow-md py-3'
          : 'bg-[hsl(var(--brand-b800))] py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          className="flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--brand-b800))]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Fernando López — back to top"
          data-testid="nav-logo"
        >
          <span className="font-sans font-medium text-white text-lg tracking-wide">
            Fernando López
          </span>
          <span className="font-mono text-white/70 text-[10px] uppercase tracking-widest mt-0.5" aria-hidden="true">
            fernandolopez.dev
          </span>
        </button>

        <nav aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'} className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-sans font-light text-white/90 hover:text-white text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--brand-b800))] rounded-sm px-1"
              data-testid={`nav-link-${id}`}
              aria-label={`${language === 'en' ? 'Navigate to' : 'Ir a'} ${label}`}
            >
              {label}
            </button>
          ))}

          {/* Language toggle — WCAG 3.1.2 */}
          <div
            role="group"
            aria-label={language === 'en' ? 'Language selection' : 'Selección de idioma'}
            className="flex items-center"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
            data-testid="lang-toggle"
          >
            <button
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              aria-label="English"
              className={`px-2 py-1 uppercase rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--brand-b800))] ${
                language === 'en'
                  ? 'text-white font-bold underline underline-offset-2'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-white/30 select-none" aria-hidden="true">|</span>
            <button
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
              aria-label="Español"
              className={`px-2 py-1 uppercase rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--brand-b800))] ${
                language === 'es'
                  ? 'text-white font-bold underline underline-offset-2'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          <button
            className="btn-brand-outline-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--brand-b800))]"
            onClick={() => scrollTo('contact')}
            data-testid="nav-cta-contact"
            aria-label={language === 'en' ? 'Navigate to contact section' : 'Ir a la sección de contacto'}
          >
            {t.nav.cta}
          </button>
        </nav>

        {/* Mobile lang toggle */}
        <div
          role="group"
          aria-label={language === 'en' ? 'Language selection' : 'Selección de idioma'}
          className="flex items-center space-x-1 md:hidden"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
        >
          <button
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            aria-label="English"
            className={`px-2 py-1 uppercase rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] ${
              language === 'en' ? 'text-white font-bold underline underline-offset-2' : 'text-white/80'
            }`}
          >
            EN
          </button>
          <span className="text-white/30 select-none" aria-hidden="true">|</span>
          <button
            onClick={() => setLanguage('es')}
            aria-pressed={language === 'es'}
            aria-label="Español"
            className={`px-2 py-1 uppercase rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] ${
              language === 'es' ? 'text-white font-bold underline underline-offset-2' : 'text-white/80'
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </motion.header>
  );
}
