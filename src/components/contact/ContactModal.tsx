"use client";

import SVGCopied from "@/components/SVGS/SVGCopied";
import SVGCopy from "@/components/SVGS/SVGCopy";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const GLASS_LAYER =
  "pointer-events-none absolute inset-0 bg-white/70 backdrop-blur-xl backdrop-saturate-150";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

const backdropTransition = {
  duration: 0.45,
  ease: EASE_IN_OUT,
};

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

const modalTransition = {
  type: "spring" as const,
  damping: 30,
  stiffness: 240,
  mass: 0.9,
};

const modalExitTransition = {
  duration: 0.32,
  ease: EASE_IN_OUT,
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1, duration: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.2, ease: EASE_IN_OUT },
  },
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isCopied, setIsCopied] = useState({ mobile: false, email: false });
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

  useEffect(() => {
    if (!isCopied.email) return;
    const t = setTimeout(
      () => setIsCopied((p) => ({ ...p, email: false })),
      1500,
    );
    return () => clearTimeout(t);
  }, [isCopied.email]);

  useEffect(() => {
    if (!isCopied.mobile) return;
    const t = setTimeout(
      () => setIsCopied((p) => ({ ...p, mobile: false })),
      1500,
    );
    return () => clearTimeout(t);
  }, [isCopied.mobile]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-center items-end md:items-center pointer-events-none">
          <motion.div
            key="contact-backdrop"
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-[6px] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: backdropTransition }}
            exit={{ opacity: 0, transition: backdropTransition }}
            onClick={onClose}
          />

          {/* Mobile bottom sheet — glass on inner layer so drag/translateY stays intact */}
          <motion.div
            key="contact-sheet"
            className="relative md:hidden w-full isolate rounded-t-[1.25rem] shadow-[0_-8px_40px_rgba(0,0,0,0.12)] max-h-[90vh] overflow-hidden pointer-events-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: sheetTransition }}
            exit={{ y: "100%", transition: sheetExitTransition }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.35 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80 || info.velocity.y > 400) onClose();
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div aria-hidden className={`${GLASS_LAYER} rounded-t-[1.25rem]`} />
            <div className="relative flex max-h-[90vh] flex-col gap-y-8 overflow-y-auto px-10 pt-6 pb-14">
              <div
                className="mx-auto mb-2 h-1 w-10 shrink-0 rounded-full bg-neutral-200"
                aria-hidden
              />
              <ModalBody
                isCopied={isCopied}
                setIsCopied={setIsCopied}
                onClose={onClose}
              />
            </div>
          </motion.div>

          {/* Desktop modal */}
          <motion.div
            key="contact-modal"
            className="relative hidden md:flex w-full max-w-2xl isolate overflow-hidden rounded-2xl shadow-2xl mx-4 pointer-events-auto"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: modalTransition,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
              transition: modalExitTransition,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div aria-hidden className={`${GLASS_LAYER} rounded-2xl`} />
            <div className="relative flex flex-col gap-y-8 px-10 py-16 md:space-y-12">
              <ModalBody
                isCopied={isCopied}
                setIsCopied={setIsCopied}
                onClose={onClose}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function ModalBody({
  isCopied,
  setIsCopied,
  onClose,
}: {
  isCopied: { mobile: boolean; email: boolean };
  setIsCopied: React.Dispatch<
    React.SetStateAction<{ mobile: boolean; email: boolean }>
  >;
  onClose: () => void;
}) {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <h2 className="inline designHeading contactMe !relative">CONTACT ME</h2>
      </motion.div>

      <div className="space-y-6 mt-8">
        <motion.p variants={itemVariants} className="designTitle">
          If you&apos;re interested in collaboration or want to learn more about
          my projects, I&apos;d be happy to connect with you.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col space-y-4">
          <ContactRow
            label="Phone"
            value="09223693919"
            href="tel:09223693919"
            copied={isCopied.mobile}
            onCopy={() => {
              navigator.clipboard.writeText("09223693919");
              setIsCopied((p) => ({ ...p, mobile: true }));
            }}
          />
          <ContactRow
            label="Email"
            value="mmoghadam376@gmail.com"
            href="mailto:mmoghadam376@gmail.com"
            copied={isCopied.email}
            onCopy={() => {
              navigator.clipboard.writeText("mmoghadam376@gmail.com");
              setIsCopied((p) => ({ ...p, email: true }));
            }}
          />
        </motion.div>

        <motion.p variants={itemVariants} className="designTitle">
          Looking forward to hearing from you!
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex text-sm font-light border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            View full contact page →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactRow({
  label,
  value,
  href,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  href: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="flex  gap-1 items-center">
      <p className="designTitleBold">{label}:</p>
      <a
        href={href}
        className="designTitleBold hover:opacity-70 transition-opacity"
      >
        {value}
      </a>
      <button
        type="button"
        className="relative ml-2 cursor-pointer"
        aria-label={`Copy ${label}`}
        onClick={onCopy}
      >
        {copied ? <SVGCopied /> : <SVGCopy />}
        <span
          className={`tooltip absolute z-50 mt-1 whitespace-normal break-words rounded-lg bg-foreground duration-300 py-1.5 px-3 scale-0 font-sans text-sm font-normal text-white transition-all opacity-0 ${
            copied ? "opacity-100 scale-100" : ""
          }`}
        >
          copied
        </span>
      </button>
    </div>
  );
}
