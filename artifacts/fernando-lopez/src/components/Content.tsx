import React from 'react';
import { motion } from 'framer-motion';
import { ContentCard } from './ui/ContentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const articles = [
  {
    type: "ARTICLE",
    duration: "8 MIN",
    title: "The Myth of the 10x Developer",
    description: "Why engineering organizations should optimize for 10x teams rather than chasing mythical individual contributors, and how to build environments that foster collective excellence.",
    topics: ["Leadership", "Culture", "Management"],
    ctaText: "Read article →",
    ctaLink: "#",
    isVideo: false
  },
  {
    type: "ARTICLE",
    duration: "12 MIN",
    title: "Defensive Programming in React",
    description: "Patterns for building resilient React applications that gracefully handle API failures, unexpected state changes, and erratic user inputs without crashing.",
    topics: ["React", "Frontend", "Patterns"],
    ctaText: "Read article →",
    ctaLink: "#",
    isVideo: false
  },
  {
    type: "ARTICLE",
    duration: "5 MIN",
    title: "Balancing the Technical Debt Ledger",
    description: "A framework for categorizing technical debt and communicating its impact to non-technical stakeholders to secure time for refactoring.",
    topics: ["Engineering", "Strategy", "Communication"],
    ctaText: "Read article →",
    ctaLink: "#",
    isVideo: false
  }
];

const videos = [
  {
    type: "VIDEO",
    duration: "45 MIN",
    title: "Mastering System Design Interviews",
    description: "A comprehensive breakdown of how to approach complex system design problems, focusing on tradeoffs, bottlenecks, and scaling strategies.",
    topics: ["System Design", "Interviews", "Architecture"],
    ctaText: "Watch video",
    ctaLink: "#",
    isVideo: true
  },
  {
    type: "VIDEO",
    duration: "18 MIN",
    title: "Effective Code Reviews",
    description: "How to conduct code reviews that actually improve code quality without damaging team morale. Moving from nitpicking to architectural guidance.",
    topics: ["Code Review", "Best Practices", "Culture"],
    ctaText: "Watch video",
    ctaLink: "#",
    isVideo: true
  }
];

export function Content() {
  return (
    <section id="content" className="section-gap bg-[hsl(var(--brand-b50))]">
      <div className="container mx-auto page-x">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }} className="text-[hsl(var(--brand-b600))] uppercase mb-4 block">Writing & Speaking</span>
          <h2 className="font-serif font-bold text-4xl text-[hsl(var(--brand-b800))]">Ideas & Perspectives</h2>
        </motion.div>

        <Tabs defaultValue="articles" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white border border-[hsl(var(--brand-b100))] rounded-none p-1">
              <TabsTrigger 
                value="articles" 
                className="rounded-none font-mono uppercase text-xs tracking-wider px-8 py-3 data-[state=active]:bg-[hsl(var(--brand-b800))] data-[state=active]:text-white"
              >
                Articles
              </TabsTrigger>
              <TabsTrigger 
                value="videos" 
                className="rounded-none font-mono uppercase text-xs tracking-wider px-8 py-3 data-[state=active]:bg-[hsl(var(--brand-b800))] data-[state=active]:text-white"
              >
                Videos
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="articles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ContentCard {...article} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ContentCard {...video} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
