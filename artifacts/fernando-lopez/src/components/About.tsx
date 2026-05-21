import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function About() {
  const { t, language } = useLanguage();

  return (
    <section
      id="about"
      className="section-gap bg-[hsl(var(--brand-b50))]"
      aria-label={language === 'en' ? 'About Fernando López' : 'Acerca de Fernando López'}
    >
      <div className="container mx-auto page-x">
        <motion.div
          className="max-w-4xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[hsl(var(--brand-b800))] leading-tight mb-8">
            {t.about.heading}<br />
            <span className="italic font-normal text-[hsl(var(--brand-b800))]">{t.about.headingItalic}</span>
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--brand-b200))]" aria-hidden="true"></div>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 list-none p-0">
          {t.about.values.map((value, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center mb-4">
                <span
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
                  className="text-[hsl(var(--brand-b600))] mr-4"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <h3 className="font-sans font-medium text-xl text-[hsl(var(--brand-g900))]">{value.title}</h3>
              </div>
              <p className="font-sans font-light text-base text-[hsl(var(--brand-g700))] leading-relaxed pl-8">
                {value.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
