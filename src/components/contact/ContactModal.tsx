"use client";

import BottomSheet from "@/components/contact/BottomSheet";
import MainModal from "@/components/contact/MainModal";
import PortalTooltip from "@/components/PortalTooltip";
import SVGCopied from "@/components/SVGS/SVGCopied";
import SVGCopy from "@/components/SVGS/SVGCopy";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { m } from "@/lib/motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

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
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isCopied, setIsCopied] = useState({ mobile: false, email: false });

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

  if (isDesktop === undefined) return null;

  const content = (
    <ContactModalBody
      isCopied={isCopied}
      setIsCopied={setIsCopied}
      onClose={onClose}
    />
  );

  if (isDesktop) {
    return (
      <MainModal isOpen={isOpen} onClose={onClose}>
        {content}
      </MainModal>
    );
  }

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      {content}
    </BottomSheet>
  );
}

function ContactModalBody({
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
    <m.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <m.div variants={itemVariants}>
        <h2 className="inline designHeading contactMe !relative">CONTACT ME</h2>
      </m.div>

      <div className="space-y-6 mt-8">
        <m.p variants={itemVariants} className="designTitle">
          If you&apos;re interested in collaboration or want to learn more about
          my projects, I&apos;d be happy to connect with you.
        </m.p>

        <m.div variants={itemVariants} className="flex flex-col space-y-4">
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
        </m.div>

        <m.p variants={itemVariants} className="designTitle">
          Looking forward to hearing from you!
        </m.p>

        <m.div variants={itemVariants}>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex text-sm font-light border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            View full contact page →
          </Link>
        </m.div>
      </div>
    </m.div>
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
  const copyBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex gap-1 items-center">
      <p className="designTitleBold">{label}:</p>
      <a
        href={href}
        className="designTitleBold hover:opacity-70 transition-opacity"
      >
        {value}
      </a>
      <button
        ref={copyBtnRef}
        type="button"
        className="ml-2 cursor-pointer"
        aria-label={`Copy ${label}`}
        onClick={onCopy}
      >
        {copied ? <SVGCopied /> : <SVGCopy />}
      </button>
      <PortalTooltip visible={copied} anchorRef={copyBtnRef}>
        copied
      </PortalTooltip>
    </div>
  );
}
