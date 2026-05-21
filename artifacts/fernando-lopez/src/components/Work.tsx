import React from 'react';
import { motion } from 'framer-motion';
import { ContentCard } from './ui/ContentCard';

const projects = [
  {
    type: "SYSTEM ARCHITECTURE",
    title: "Scaling Event-Driven Microservices",
    description: "A comprehensive teardown of transitioning a monolithic legacy system to an event-driven architecture handling 10k+ requests per second, focusing on data consistency and developer experience.",
    topics: ["Architecture", "Kafka", "Go"],
    ctaText: "Read case study →",
    ctaLink: "#",
    isVideo: false
  },
  {
    type: "AI INTEGRATION",
    title: "LLMs in Production: Beyond the Prototype",
    description: "Practical strategies for moving Large Language Models from Jupyter notebooks to production-ready API services with robust error handling, caching, and rate limiting.",
    topics: ["AI", "Python", "MLOps"],
    ctaText: "Read more →",
    ctaLink: "#",
    isVideo: false
  },
  {
    type: "EDUCATION",
    title: "Advanced Data Structures Curriculum",
    description: "A semester-long university curriculum designed to bridge the gap between theoretical computer science and practical software engineering requirements in modern tech companies.",
    topics: ["Teaching", "CS", "Curriculum"],
    ctaText: "View syllabus →",
    ctaLink: "#",
    isVideo: false
  },
  {
    type: "OPEN SOURCE",
    title: "TypeScript API Generator",
    description: "A widely-used open source utility that generates type-safe frontend clients directly from OpenAPI specifications, reducing integration bugs by 40%.",
    topics: ["TypeScript", "OpenAPI", "Tooling"],
    ctaText: "View repository →",
    ctaLink: "#",
    isVideo: false
  }
];

export function Work() {
  return (
    <section id="work" className="section-gap bg-white">
      <div className="container mx-auto page-x">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em' }} className="text-[hsl(var(--brand-b600))] uppercase mb-4 block">Selected Work</span>
            <h2 className="font-serif font-bold text-4xl text-[hsl(var(--brand-b800))]">Projects & Engineering</h2>
          </div>
          <p className="font-sans font-light text-[hsl(var(--brand-g600))] max-w-md mt-6 md:mt-0 md:text-right">
            A selection of architectural implementations, open source contributions, and educational materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ContentCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
