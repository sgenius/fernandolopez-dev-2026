import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { ContentCard } from './ui/ContentCard';

export function Work() {
  const { t, language } = useLanguage();

  return (
    <section
      id="work"
      className="section-gap bg-white"
      aria-label={language === 'en' ? 'Projects and engineering work' : 'Proyectos y trabajo de ingeniería'}
    >
      <div className="container mx-auto page-x">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span
              style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
              className="text-[hsl(var(--brand-b600))] uppercase mb-4 block"
              aria-hidden="true"
            >
              {t.work.label}
            </span>
            <h2 className="font-serif font-bold text-4xl text-[hsl(var(--brand-b800))]">{t.work.heading}</h2>
          </div>
          <p className="font-sans font-light text-[hsl(var(--brand-g600))] max-w-md mt-6 md:mt-0 md:text-right">
            {t.work.subheading}
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0">
          {t.work.projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ContentCard
                type={project.type}
                title={project.title}
                description={project.description}
                topics={project.topics}
                ctaText={project.ctaText}
                ctaLink="#"
                isVideo={false}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
