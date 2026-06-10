'use client';

import { MotionValue, useScroll } from 'framer-motion';
import { createContext, ReactNode, useContext, useRef } from 'react';

const ParallaxContext = createContext<MotionValue<number> | null>(null);

export function useParallaxProgress() {
  return useContext(ParallaxContext);
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  offset?: [string, string];
}

export default function ParallaxSection({
  children,
  className = '',
  offset = ['start end', 'end start'],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ['start end', 'end start'],
  });

  return (
    <ParallaxContext.Provider value={scrollYProgress}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </ParallaxContext.Provider>
  );
}
