'use client';

import { m } from '@/lib/motion';
import React, { useCallback } from 'react';
import SVGArrowUp from '../SVGS/SVGArrowUp';
import MobileAccordionPanel from './MobileAccordionPanel';

interface IJobCard {
  name: string;
  role: string;
  description: string;
  fromDate: string;
  toDate: string;
  setIsOpen: (_: string) => void;
  isOpen: boolean;
}

const JobCard: React.FC<IJobCard> = ({
  fromDate,
  name,
  role,
  toDate,
  description,
  setIsOpen = () => {},
  isOpen,
}) => {
  const scrollToCard = useCallback(() => {
    const element = document.getElementById(name);
    if (!element) return;

    const headerOffset = 96;
    const top =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, [name]);

  const handleClick = useCallback(() => {
    if (isOpen) {
      setIsOpen('');
      return;
    }

    setIsOpen(name);
    requestAnimationFrame(() => scrollToCard());
  }, [isOpen, name, scrollToCard, setIsOpen]);

  return (
    <div className="py-4">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3">
        <div className="col-span-1 flex flex-col items-start justify-start gap-4">
          <h1 className="designHeading text-gray2">{name}</h1>
          <h3 className="designHeading2 !font-light text-foreground whitespace-pre-line">
            {role}
          </h3>
          <p className="designHeading2 !text-gray1 !font-normal">
            {fromDate} - {toDate}
          </p>
        </div>
        <p
          className="col-span-2 designTitle leading-8 text-foreground !whitespace-pre-line !break-words"
          style={{ whiteSpace: 'pre-line', wordWrap: 'break-word' }}
        >
          {description}
        </p>
      </div>

      {/* Mobile View */}
      <div
        id={name}
        className="relative md:hidden border-b border-[#7B7B7B] collapsible"
      >
        <button
          type="button"
          className="w-full text-left flex flex-col gap-1 py-1"
          onClick={handleClick}
          aria-expanded={isOpen}
        >
          <h1 className="font-medium text-lg text-gray2">{name}</h1>
          <div className="flex justify-between items-center w-full gap-3">
            <h3 className="text-base font-light text-foreground whitespace-pre-line flex-1">
              {role}
            </h3>
            <p className="text-gray1 text-sm font-normal shrink-0">
              {fromDate} - {toDate}
            </p>
          </div>
        </button>

        <MobileAccordionPanel isOpen={isOpen} onOpenComplete={scrollToCard}>
          <p
            className="designTitle leading-8 mt-2 text-foreground whitespace-pre-line break-words"
            style={{ whiteSpace: 'pre-line', wordWrap: 'break-word' }}
          >
            {description}
          </p>
        </MobileAccordionPanel>

        <button
          type="button"
          className="w-full flex items-center justify-center"
          onClick={handleClick}
          aria-label={isOpen ? 'Collapse details' : 'Expand details'}
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

export default JobCard;
