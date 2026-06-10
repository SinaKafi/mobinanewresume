"use client";

import { LazyMotion, domMax, MotionConfig } from "framer-motion";
import { ReactNode } from "react";

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
