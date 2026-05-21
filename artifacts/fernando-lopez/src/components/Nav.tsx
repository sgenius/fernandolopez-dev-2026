import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { language, t, toggle } = useLanguage();

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
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="nav-logo"
        >
          <span className="font-sans font-medium text-white text-lg tracking-wide">
            Fernando López
          </span>
          <span className="font-mono text-white/70 text-[10px] uppercase tracking-widest mt-0.5">
            fernandolopez.dev
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-sans font-light text-white/90 hover:text-white text-sm tracking-wide transition-colors"
              data-testid={`nav-link-${id}`}
            >
              {label}
            </button>
          ))}

          <div
            className="flex items-center"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
            data-testid="lang-toggle"
          >
            <button
              onClick={toggle}
              className={`px-2 py-1 uppercase transition-colors ${
                language === 'en'
                  ? 'text-white font-bold'
                  : 'text-white/50 hover:text-white/80'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={toggle}
              className={`px-2 py-1 uppercase transition-colors ${
                language === 'es'
                  ? 'text-white font-bold'
                  : 'text-white/50 hover:text-white/80'
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>
          </div>

          <button
            className="btn-brand-outline-white text-xs"
            onClick={() => scrollTo('contact')}
            data-testid="nav-cta-contact"
          >
            {t.nav.cta}
          </button>
        </nav>

        <div className="flex items-center space-x-3 md:hidden">
          <div
            className="flex items-center"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
          >
            <button
              onClick={toggle}
              className={`px-2 py-1 uppercase transition-colors ${
                language === 'en' ? 'text-white font-bold' : 'text-white/50'
              }`}
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={toggle}
              className={`px-2 py-1 uppercase transition-colors ${
                language === 'es' ? 'text-white font-bold' : 'text-white/50'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
