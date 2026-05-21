import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle } from "lucide-react";

export interface ContentCardProps {
  type: string;
  duration?: string;
  title: string;
  description: string;
  topics: readonly string[];
  ctaText: string;
  ctaLink: string;
  isVideo?: boolean;
}

export function ContentCard({
  type,
  duration,
  title,
  description,
  topics,
  ctaText,
  ctaLink,
  isVideo = false,
}: ContentCardProps) {
  const ctaColorClass = isVideo ? "text-[hsl(var(--brand-amber))]" : "text-[hsl(var(--brand-b600))]";
  const Icon = isVideo ? PlayCircle : ArrowRight;

  return (
    <Card className="flex flex-col h-full bg-[hsl(var(--brand-b50))] md:bg-white border border-[hsl(var(--brand-b100))] hover:shadow-md transition-shadow duration-300 p-6 md:p-8 rounded-none">
      <div className="flex items-center space-x-2 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[hsl(var(--brand-b600))]">
          {type} {duration && `· ${duration}`}
        </span>
      </div>
      
      <h3 className="font-sans font-medium text-lg md:text-xl text-[hsl(var(--brand-g900))] mb-3 leading-snug">
        {title}
      </h3>
      
      <p className="font-sans font-light text-base text-[hsl(var(--brand-g700))] mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[hsl(var(--brand-b100))]">
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, i) => (
            <Badge 
              key={i} 
              variant="outline" 
              className="font-mono text-[10px] uppercase tracking-[0.06em] text-[hsl(var(--brand-b600))] border-[hsl(var(--brand-b200))] bg-[hsl(var(--brand-b50))] px-2 py-0.5 rounded-none font-normal"
            >
              {topic}
            </Badge>
          ))}
        </div>
        
        <a 
          href={ctaLink}
          className={`flex items-center space-x-2 font-sans font-medium text-sm transition-colors hover:opacity-80 ${ctaColorClass}`}
          data-testid={`link-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span>{ctaText}</span>
          <Icon className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
}
