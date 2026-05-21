import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.png';

export function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center pt-20 bg-[hsl(var(--brand-b800))] overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img 
          src={heroBg} 
          alt="Abstract geometric background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto page-x z-10 relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {['ENGINEERING', 'AI', 'PROFESSIONAL DEVELOPMENT'].map((label, i) => (
              <span key={i} className="font-mono text-white/80 text-xs md:text-sm uppercase tracking-[0.1em] border border-white/20 px-3 py-1">
                {label}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Fernando López
          </motion.h1>
          
          <motion.h2
            className="font-serif italic text-2xl md:text-4xl text-white/70 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            fernandolopez.dev
          </motion.h2>

          <motion.p
            className="font-sans font-light text-xl md:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Staff Software Developer · Professor · Content creator
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <button 
              style={{
                backgroundColor: 'hsl(38 95% 55%)',
                color: 'hsl(0 0% 8%)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: 0,
                padding: '14px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="hero-cta-contact"
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
