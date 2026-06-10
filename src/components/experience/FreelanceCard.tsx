"use client";

import { m } from "@/lib/motion";
import Image from "next/image";
import React, { useCallback } from "react";
import SVGArrowUp from "../SVGS/SVGArrowUp";
import MobileAccordionPanel from "./MobileAccordionPanel";

interface IFreelanceCard {
  name: string;
  description: string;
  setIsOpen: (_: string) => void;
  isOpen: boolean;
  Icon: string;
  id: string;
}

const FreelanceCard: React.FC<IFreelanceCard> = ({
  name,
  description,
  setIsOpen = () => {},
  isOpen,
  Icon,
  id,
}) => {
  const scrollToCard = useCallback(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 96;
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, [id]);

  const handleClick = useCallback(() => {
    if (isOpen) {
      setIsOpen("");
      return;
    }

    setIsOpen(id);
    requestAnimationFrame(() => scrollToCard());
  }, [isOpen, id, scrollToCard, setIsOpen]);

  return (
    <div className="freelanceCard py-4">
      {/* Desktop View */}
      <div className="hidden md:flex  flex-col gap-2">
        <div className="col-span-1 flex items-center justify-start gap-2">
          <Image
            src={Icon}
            alt=""
            aria-hidden
            className="!inline-flex"
            width={36}
            height={36}
          />
          <h1 className="designHeading text-gray2 !text-xl">{name}</h1>
        </div>
        <p
          className="col-span-2 designTitle leading-8 text-foreground !whitespace-pre-line !break-words"
          style={{ whiteSpace: "pre-line !important", wordWrap: "break-word" }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>

      {/* Mobile View */}
      <div
        id={id}
        className="relative md:hidden border-b border-[#7B7B7B] collapsible"
      >
        <button
          type="button"
          className="w-full text-left flex items-start flex-col gap-1 py-1"
          onClick={handleClick}
          aria-expanded={isOpen}
        >
          <Image
            src={Icon}
            alt=""
            aria-hidden
            width={28}
            height={28}
            className="inline-flex !mr-auto pr-1 !w-7 !h-7"
          />
          <h1 className="font-medium text-lg text-gray2">{name}</h1>
        </button>

        <MobileAccordionPanel isOpen={isOpen} onOpenComplete={scrollToCard}>
          <div
            className="designTitle leading-8 text-foreground !whitespace-pre-line !break-words"
            style={{
              whiteSpace: "pre-line !important",
              wordWrap: "break-word",
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </MobileAccordionPanel>

        <button
          type="button"
          className="w-full flex items-center justify-center"
          onClick={handleClick}
          aria-label={isOpen ? "Collapse details" : "Expand details"}
        >
          <m.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <SVGArrowUp className="text-[#2E2E2E] my-2" />
          </m.span>
        </button>
      </div>
    </div>
  );
};

export default FreelanceCard;
