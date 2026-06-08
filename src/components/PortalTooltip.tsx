"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalTooltipProps {
  visible: boolean;
  anchorRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
}

type TooltipPos = {
  top: number;
  left: number;
  centered: boolean;
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function isAnchorVisible(el: HTMLElement) {
  const { width, height } = el.getBoundingClientRect();
  return width > 0 && height > 0;
}

export default function PortalTooltip({
  visible,
  anchorRef,
  children,
}: PortalTooltipProps) {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<TooltipPos | null>(null);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;

    const update = () => {
      const el = anchorRef.current;
      if (!el || !isAnchorVisible(el)) {
        setPos(null);
        return;
      }

      const { bottom, left, width } = el.getBoundingClientRect();
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      setPos({
        top: bottom + 4,
        left: isMobile ? left + width / 2 : left,
        centered: isMobile,
      });
    };

    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [visible, anchorRef]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && pos && (
        <motion.span
          key="portal-tooltip"
          role="status"
          className={`tooltip fixed z-[70] origin-top whitespace-normal break-words rounded-lg bg-foreground py-1.5 px-3 font-sans text-sm font-normal text-white pointer-events-none${pos.centered ? " tooltip--center" : ""}`}
          style={{ top: pos.top, left: pos.left }}
          initial={{
            opacity: 0,
            scale: 0.85,
            y: -4,
            x: pos.centered ? "-50%" : 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: pos.centered ? "-50%" : 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: -2,
            x: pos.centered ? "-50%" : 0,
          }}
          transition={{ duration: 0.22, ease: EASE_OUT }}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>,
    document.body,
  );
}
