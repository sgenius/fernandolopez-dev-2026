import React from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Content } from '@/components/Content';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--brand-b50))] font-sans flex flex-col">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Hero />
        <About />
        <Work />
        <Content />
        <Contact />
      </main>
    </div>
  );
}
