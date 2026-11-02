'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ExperienceCard from '../GalleryCard';

type WorkItem = {
  title: string;
  cover: string;
  route: string;
  id: number;
};

export default function FeaturedWork({ items }: { items: WorkItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const calculate = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
      setViewportWidth(window.innerWidth);
    };
    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, [items.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance =
        containerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackWidth, viewportWidth]);

  const horizontalScrollAmount = Math.max(0, trackWidth - viewportWidth);
  const translateX = -scrollProgress * horizontalScrollAmount;
  const sectionHeight = Math.max(
    300,
    horizontalScrollAmount * 0.5 + viewportWidth * 0.6
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${sectionHeight}px` }}
      aria-label={`Featured work gallery, ${items.length} projects`}
      role="region"
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-background">
        <div className="absolute left-6 top-8 z-20 md:left-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gray1 font-light mb-2">
            Selected Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Featured Work
          </h2>
          <Link
            href="/portfolio"
            className="inline-block mt-3 text-sm font-light text-gray1 hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            View all projects -&gt;
          </Link>
        </div>
        <div
          ref={trackRef}
          className="featured-track h-full flex items-center pl-24 md:pl-36 lg:pl-44 pr-20"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: reducedMotion ? 'none' : 'transform 0.1s ease-out',
            willChange: 'transform',
            paddingTop: '40px',
            paddingBottom: '40px',
          }}
        >
          {items.map((item, index) => {
            return (
              <div
                key={item.id}
                className="featured-item flex-shrink-0 relative group cursor-pointer block"
                style={{ marginRight: '40px' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ExperienceCard {...item} priority={index === 0} />
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/5">
          <div
            className="h-full bg-foreground/20"
            style={{
              width: `${scrollProgress * 100}%`,
              transition: reducedMotion ? 'none' : 'width 0.1s ease-out',
            }}
          />
        </div>
        <div
          className="absolute bottom-8 right-8 flex items-center gap-2 text-gray1 transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.1 ? 1 : 0 }}
        >
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            className="animate-pulse"
          >
            <path
              d="M1 6H19M19 6L14 1M19 6L14 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
