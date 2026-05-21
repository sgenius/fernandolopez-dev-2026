import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[hsl(var(--brand-b900))] text-white pt-[44px] pb-12 border-t-8 border-[hsl(var(--brand-b800))]">
      <div className="container mx-auto page-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">{t.contact.heading}</h2>
            <p className="font-sans font-light text-[hsl(var(--brand-b100))] text-lg leading-relaxed max-w-md mb-8">
              {t.contact.subheading}
            </p>

            <a
              href="mailto:hello@fernandolopez.dev"
              className="btn-brand-primary"
              data-testid="contact-email-button"
            >
              <Mail className="mr-3 h-5 w-5" />
              hello@fernandolopez.dev
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-white/10 pb-6">
                <Linkedin className="h-6 w-6 text-[hsl(var(--brand-b600))]" />
                <a href="#" className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b600))] transition-colors">
                  linkedin.com/in/fernandolopez
                </a>
              </div>
              <div className="flex items-center space-x-4 border-b border-white/10 pb-6">
                <Github className="h-6 w-6 text-[hsl(var(--brand-b600))]" />
                <a href="#" className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b600))] transition-colors">
                  github.com/fernandolopez
                </a>
              </div>
              <div className="flex items-center space-x-4 pb-6">
                <Twitter className="h-6 w-6 text-[hsl(var(--brand-b600))]" />
                <a href="#" className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b600))] transition-colors">
                  @fernandolopez
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[hsl(var(--brand-b200))] font-sans font-light text-sm">
          <p>© {new Date().getFullYear()} Fernando López. {t.contact.copyright}</p>
          <p
            className="mt-4 md:mt-0 uppercase text-[hsl(var(--brand-b600))]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
          >
            fernandolopez.dev
          </p>
        </div>
      </div>
    </section>
  );
}
