"use client";

import { useDragControls } from "framer-motion";
import { AnimatePresence, m } from "@/lib/motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const GLASS_LAYER =
  "pointer-events-none absolute inset-0 bg-white/70 backdrop-blur-xl backdrop-saturate-150";

const SHELL_BASE =
  "relative isolate w-full overflow-hidden border-2 border-white";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const sheetTransition = {
  type: "spring" as const,
  damping: 34,
  stiffness: 260,
  mass: 0.85,
};

const sheetExitTransition = {
  duration: 0.42,
  ease: EASE_OUT,
};

const DRAG_CLOSE_OFFSET = 80;
const DRAG_CLOSE_VELOCITY = 400;

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) {
  const [mounted, setMounted] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) setScrollLocked(false);
  }, [isOpen]);

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
          <m.div
            key="bottom-sheet-backdrop"
            className="fixed inset-0 z-[60] bg-gray-900/50 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
            onClick={onClose}
          />

          <m.div
            key="bottom-sheet"
            className="fixed inset-x-0 bottom-0 z-[60] w-full max-h-[90vh]"
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: sheetTransition }}
            exit={{ y: "100%", transition: sheetExitTransition }}
            drag="y"
            dragControls={dragControls}
            dragListener={!scrollLocked}
            dragConstraints={{ top: 0 }}
            dragElastic={{ top: 0, bottom: 0.35 }}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              if (
                info.offset.y > DRAG_CLOSE_OFFSET ||
                info.velocity.y > DRAG_CLOSE_VELOCITY
              ) {
                onClose();
              }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${SHELL_BASE} max-h-[90vh] rounded-t-[1.25rem] shadow-[0_-8px_40px_rgba(0,0,0,0.12)]`}
            >
              <div aria-hidden className={GLASS_LAYER} />
              <div className="relative flex max-h-[90vh] flex-col">
                <div
                  className="shrink-0 cursor-grab touch-none px-10 pt-6 pb-2 active:cursor-grabbing"
                  onPointerDown={(e) => dragControls.start(e)}
                >
                  <div
                    className="mx-auto h-1 w-10 rounded-full bg-neutral-200"
                    aria-hidden
                  />
                </div>
                <div
                  ref={scrollRef}
                  onScroll={() =>
                    setScrollLocked((scrollRef.current?.scrollTop ?? 0) > 0)
                  }
                  className="flex flex-col gap-y-8 overflow-y-auto px-10 pb-14"
                >
                  {children}
                </div>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
