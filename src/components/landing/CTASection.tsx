'use client';

import Link from 'next/link';
import { useScroll, useTransform } from 'framer-motion';
import { m } from '@/lib/motion';
import { useRef } from 'react';

const LINKS = [
  { href: '/portfolio', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/caseStudy', label: 'Case Study' },
  { href: '/project', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section ref={ref} className="py-24 md:py-32">
      <m.div
        style={{ scale: bgScale }}
        className="relative rounded-2xl bg-foreground text-background px-8 py-16 md:px-16 md:py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            Let&apos;s build something meaningful together
          </h2>
          <p className="text-sm md:text-base font-light opacity-80 leading-relaxed text-background">
            Open to collaboration, freelance projects, and full-time
            opportunities. I&apos;d love to hear about what you&apos;re working
            on.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="px-6 py-2.5 rounded border border-background/30 text-sm font-light hover:bg-background hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
}
