'use client';

import { MotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { m } from '@/lib/motion';
import { ReactNode } from 'react';
import { useParallaxProgress } from './ParallaxSection';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

function ParallaxLayerInner({
  children,
  speed,
  className,
  progress,
}: ParallaxLayerProps & { progress: MotionValue<number> }) {
  const y = useTransform(
    progress,
    [0, 1],
    [`${-(speed ?? 0.12) * 120}px`, `${(speed ?? 0.12) * 120}px`]
  );

  return (
    <m.div style={{ y }} className={`parallax-layer ${className}`.trim()}>
      {children}
    </m.div>
  );
}

export default function ParallaxLayer({
  children,
  speed = 0.12,
  className = '',
}: ParallaxLayerProps) {
  const reducedMotion = useReducedMotion();
  const progress = useParallaxProgress();

  if (reducedMotion || !progress) {
    return (
      <div className={`parallax-layer ${className}`.trim()}>{children}</div>
    );
  }

  return (
    <ParallaxLayerInner speed={speed} className={className} progress={progress}>
      {children}
    </ParallaxLayerInner>
  );
}
