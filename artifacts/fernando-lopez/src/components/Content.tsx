import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { ContentCard } from './ui/ContentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Content() {
  const { t, language } = useLanguage();

  return (
    <section
      id="content"
      className="section-gap bg-[hsl(var(--brand-b50))]"
      aria-label={language === 'en' ? 'Articles and videos' : 'Artículos y videos'}
    >
      <div className="container mx-auto page-x">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }}
            className="text-[hsl(var(--brand-b600))] uppercase mb-4 block"
            aria-hidden="true"
          >
            {t.content.label}
          </span>
          <h2 className="font-serif font-bold text-4xl text-[hsl(var(--brand-b800))]">{t.content.heading}</h2>
        </motion.div>

        <Tabs defaultValue="articles" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList
              className="bg-white border border-[hsl(var(--brand-b100))] rounded-none p-1"
              aria-label={language === 'en' ? 'Content type' : 'Tipo de contenido'}
            >
              <TabsTrigger
                value="articles"
                className="rounded-none font-mono uppercase text-xs tracking-wider px-8 py-3 data-[state=active]:bg-[hsl(var(--brand-b800))] data-[state=active]:text-white"
              >
                {t.content.tabs.articles}
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="rounded-none font-mono uppercase text-xs tracking-wider px-8 py-3 data-[state=active]:bg-[hsl(var(--brand-b800))] data-[state=active]:text-white"
              >
                {t.content.tabs.videos}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="articles" className="mt-0">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
              {t.content.articles.map((article, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ContentCard
                    type={article.type}
                    duration={article.duration}
                    title={article.title}
                    description={article.description}
                    topics={article.topics}
                    ctaText={article.ctaText}
                    ctaLink="#"
                    isVideo={false}
                  />
                </motion.li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0">
              {t.content.videos.map((video, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ContentCard
                    type={video.type}
                    duration={video.duration}
                    title={video.title}
                    description={video.description}
                    topics={video.topics}
                    ctaText={video.ctaText}
                    ctaLink="#"
                    isVideo={true}
                  />
                </motion.li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
