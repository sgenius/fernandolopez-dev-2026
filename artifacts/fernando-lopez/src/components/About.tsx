import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "People first",
    description: "Technology is only as good as the human problems it solves. I build for people, not for the sake of code."
  },
  {
    title: "Work with efficiency",
    description: "Maximizing impact requires minimizing friction. I prioritize clean architectures and scalable processes."
  },
  {
    title: "Practical excellence",
    description: "Rigorous engineering doesn't mean over-engineering. Deliver quality that matters."
  },
  {
    title: "Balance",
    description: "Sustainable careers are built on healthy boundaries. Rest is part of the work."
  },
  {
    title: "Leadership through coherence",
    description: "Actions speak louder than titles. I aim to lead by setting the standard and bringing others along."
  }
];

export function About() {
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
            Engineering with purpose,<br />
            <span className="italic font-normal text-[hsl(var(--brand-b800))]">always for the person.</span>
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--brand-b200))]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center mb-4">
                <span className="font-mono text-[hsl(var(--brand-b600))] text-sm mr-4">0{index + 1}</span>
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
