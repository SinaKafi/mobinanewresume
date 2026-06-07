"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const PANEL_EASE = [0.22, 1, 0.36, 1] as const;

interface MobileAccordionPanelProps {
  isOpen: boolean;
  children: ReactNode;
  onOpenComplete?: () => void;
}

export default function MobileAccordionPanel({
  isOpen,
  children,
  onOpenComplete,
}: MobileAccordionPanelProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return isOpen ? <div className="pt-4">{children}</div> : null;
  }

  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        height: { duration: 0.45, ease: PANEL_EASE },
        opacity: { duration: 0.3, ease: PANEL_EASE },
      }}
      className="overflow-hidden"
      onAnimationComplete={() => {
        if (isOpen) onOpenComplete?.();
      }}
    >
      <div className="pt-4">{children}</div>
    </motion.div>
  );
}
