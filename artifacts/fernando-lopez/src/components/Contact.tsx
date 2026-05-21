import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[hsl(var(--brand-b900))] text-white pt-24 md:pt-32 pb-12 border-t-8 border-[hsl(var(--brand-b800))]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">Let's connect</h2>
            <p className="font-sans font-light text-[hsl(var(--brand-b100))] text-lg leading-relaxed max-w-md mb-10">
              I'm always open to discussing engineering leadership, speaking opportunities, or architectural challenges.
            </p>
            
            <a href="mailto:hello@fernandolopez.dev">
              <Button 
                size="lg"
                className="bg-[hsl(var(--brand-b600))] hover:bg-[hsl(var(--brand-b700))] text-white font-sans font-medium text-base rounded-none px-8 py-6 uppercase tracking-wider"
                data-testid="contact-email-button"
              >
                <Mail className="mr-3 h-5 w-5" />
                hello@fernandolopez.dev
              </Button>
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
                <Linkedin className="h-6 w-6 text-[hsl(var(--brand-b400))]" />
                <a href="#" className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b400))] transition-colors">
                  linkedin.com/in/fernandolopez
                </a>
              </div>
              <div className="flex items-center space-x-4 border-b border-white/10 pb-6">
                <Github className="h-6 w-6 text-[hsl(var(--brand-b400))]" />
                <a href="#" className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b400))] transition-colors">
                  github.com/fernandolopez
                </a>
              </div>
              <div className="flex items-center space-x-4 pb-6">
                <Twitter className="h-6 w-6 text-[hsl(var(--brand-b400))]" />
                <a href="#" className="font-sans font-light text-lg hover:text-[hsl(var(--brand-b400))] transition-colors">
                  @fernandolopez
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[hsl(var(--brand-b200))] font-sans font-light text-sm">
          <p>© {new Date().getFullYear()} Fernando Augusto López Plascencia. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-widest text-[hsl(var(--brand-b400))]">fernandolopez.dev</p>
        </div>
      </div>
    </section>
  );
}
