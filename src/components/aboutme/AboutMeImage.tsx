'use client';

import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { m } from '@/lib/motion';
import { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { asset } from '@/lib/assets';

export default function AboutMeImage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 50 : 140]
  );
  const imageY = useSpring(imageYRaw, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <m.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, x: -48 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={reducedMotion ? undefined : { y: imageY, willChange: 'transform' }}
      className="relative w-full max-w-[420px] mx-auto lg:mx-0 aspect-square"
      data-aos="fade-right"
      data-aos-offset="100"
    >
      <div className="absolute inset-0 rounded-2xl bg-neutral-100 -rotate-3 scale-[1.02]" />
      <Image
        src={asset('/mobi.png')}
        alt="Mobina Moghadam - UI/UX Designer"
        width={1000}
        height={1000}
        sizes="(max-width: 1024px) 100vw, 420px"
        className="relative rounded-2xl object-cover w-full h-full drop-shadow-lg"
      />
    </m.div>
  );
}
