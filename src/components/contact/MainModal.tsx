"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const GLASS_LAYER =
  "pointer-events-none absolute inset-0 bg-white/70 backdrop-blur-xl backdrop-saturate-150";

const SHELL_BASE =
  "relative isolate w-full overflow-hidden border-2 border-white";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export interface MainModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function MainModal({ isOpen, onClose, children }: MainModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="main-modal-backdrop"
            className="fixed inset-0 z-[60] bg-gray-900/50 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
            onClick={onClose}
          />

          <motion.div
            key="main-modal"
            className="fixed inset-0 z-[60] flex items-center justify-center px-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
          >
            <div
              className={`${SHELL_BASE} w-full max-w-2xl rounded-2xl shadow-2xl pointer-events-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div aria-hidden className={GLASS_LAYER} />
              <div className="relative flex flex-col gap-y-8 px-10 py-16 md:space-y-12">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
