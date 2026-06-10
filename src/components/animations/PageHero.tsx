'use client';

import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { m } from '@/lib/motion';
import { useRef } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  watermark: string;
}

function PageHeroStatic({ title, subtitle, watermark }: PageHeroProps) {
  return (
    <section className="relative py-14 md:py-20 mb-10 md:mb-16 overflow-hidden">
      <div
        className="absolute -top-6 md:-top-10 left-0 text-[clamp(3.5rem,11vw,9rem)] font-medium text-neutral-100 select-none pointer-events-none leading-none tracking-tight"
        aria-hidden
      >
        {watermark}
      </div>
      <div className="relative z-10" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg font-light text-gray1 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-foreground/30 via-foreground/10 to-transparent"
        aria-hidden
      />
    </section>
  );
}

function PageHeroAnimated({ title, subtitle, watermark }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const watermarkX = useTransform(scrollYProgress, [0, 1], ['-3%', '8%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative py-14 md:py-20 mb-10 md:mb-16 overflow-hidden"
    >
      <m.div
        style={{ y: watermarkY, x: watermarkX }}
        className="absolute -top-6 md:-top-10 left-0 text-[clamp(3.5rem,11vw,9rem)] font-medium text-neutral-100 select-none pointer-events-none leading-none tracking-tight"
        aria-hidden
      >
        {watermark}
      </m.div>

      <m.div style={{ y: contentY, opacity }} className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg font-light text-gray1 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </m.div>

      <m.div
        style={{ scaleX: lineScale }}
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-foreground/30 via-foreground/10 to-transparent origin-left"
        aria-hidden
      />
    </section>
  );
}

export default function PageHero(props: PageHeroProps) {
  const reducedMotion = useReducedMotion();
  return reducedMotion ? (
    <PageHeroStatic {...props} />
  ) : (
    <PageHeroAnimated {...props} />
  );
}
