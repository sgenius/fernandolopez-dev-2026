import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  const { t, language } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-[hsl(var(--brand-b900))] text-white pt-[44px] pb-12 border-t-8 border-[hsl(var(--brand-b800))]"
      aria-label={language === 'en' ? 'Contact Fernando López' : 'Contactar a Fernando López'}
    >
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
              className="btn-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--brand-b900))]"
              data-testid="contact-email-button"
              aria-label={language === 'en' ? 'Send email to Fernando López' : 'Enviar correo a Fernando López'}
            >
              <Mail className="mr-3 h-5 w-5" aria-hidden="true" />
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
            <nav aria-label={language === 'en' ? 'Social media links' : 'Redes sociales'}>
              <ul className="space-y-6 list-none p-0">
                <li className="flex items-center space-x-4 border-b border-white/10 pb-6">
                  <Linkedin className="h-6 w-6 text-[hsl(var(--brand-b600))] flex-shrink-0" aria-hidden="true" />
                  <a
                    href="https://linkedin.com/in/fernandolopez"
                    className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b600))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--brand-b900))] rounded-sm"
                    aria-label={language === 'en' ? 'Visit Fernando López on LinkedIn (opens in new tab)' : 'Ver perfil de Fernando López en LinkedIn (se abre en nueva pestaña)'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/fernandolopez
                  </a>
                </li>
                <li className="flex items-center space-x-4 border-b border-white/10 pb-6">
                  <Github className="h-6 w-6 text-[hsl(var(--brand-b600))] flex-shrink-0" aria-hidden="true" />
                  <a
                    href="https://github.com/fernandolopez"
                    className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b600))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--brand-b900))] rounded-sm"
                    aria-label={language === 'en' ? 'Visit Fernando López on GitHub (opens in new tab)' : 'Ver perfil de Fernando López en GitHub (se abre en nueva pestaña)'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/fernandolopez
                  </a>
                </li>
                <li className="flex items-center space-x-4 pb-6">
                  <Twitter className="h-6 w-6 text-[hsl(var(--brand-b600))] flex-shrink-0" aria-hidden="true" />
                  <a
                    href="https://twitter.com/fernandolopez"
                    className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b600))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-amber))] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--brand-b900))] rounded-sm"
                    aria-label={language === 'en' ? 'Visit Fernando López on X / Twitter (opens in new tab)' : 'Ver perfil de Fernando López en X / Twitter (se abre en nueva pestaña)'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @fernandolopez
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[hsl(var(--brand-b200))] font-sans font-light text-sm">
          <p>© {new Date().getFullYear()} Fernando López. {t.contact.copyright}</p>
          <p
            className="mt-4 md:mt-0 uppercase text-[hsl(var(--brand-b600))]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
            aria-hidden="true"
          >
            fernandolopez.dev
          </p>
        </div>
      </div>
    </section>
  );
}
