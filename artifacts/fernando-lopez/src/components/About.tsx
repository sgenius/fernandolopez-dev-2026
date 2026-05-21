import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-gap bg-[hsl(var(--brand-b50))]">
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
          <div className="w-24 h-1 bg-[hsl(var(--brand-b200))]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {t.about.values.map((value, index) => (
            <motion.div
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
                >
                  0{index + 1}
                </span>
                <h3 className="font-sans font-medium text-xl text-[hsl(var(--brand-g900))]">{value.title}</h3>
              </div>
              <p className="font-sans font-light text-base text-[hsl(var(--brand-g700))] leading-relaxed pl-8">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
