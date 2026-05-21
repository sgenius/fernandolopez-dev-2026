import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-testid="nav-logo">
          <span className="font-sans font-medium text-white text-lg tracking-wide">
            Fernando López
          </span>
          <span className="font-mono text-white/70 text-[10px] uppercase tracking-widest mt-0.5">
            fernandolopez.dev
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'work', 'content', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-sans font-light text-white/90 hover:text-white text-sm tracking-wide capitalize transition-colors"
              data-testid={`nav-link-${item}`}
            >
              {item}
            </button>
          ))}
          <button
            className="btn-brand-outline-white text-xs"
            onClick={() => scrollTo('contact')}
            data-testid="nav-cta-contact"
          >
            Get in touch
          </button>
        </nav>

        {/* Mobile menu button could go here, omitting for brevity to focus on desktop/responsive scaling */}
      </div>
    </motion.header>
  );
}
