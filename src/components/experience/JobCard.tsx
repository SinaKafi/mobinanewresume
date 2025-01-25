"use client";
import React from "react";
import SVGArrowUp from "../SVGS/SVGArrowUp";

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
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 85; // ارتفاع هدر یا فاصله از بالا
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    if (isOpen) {
      setIsOpen("");
    } else {
      setIsOpen(name);
      setTimeout(() => {
        scrollToElement(name);
      }, 100);
    }
  };

  return (
    <div className=" py-4">
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
          style={{ whiteSpace: "pre-line !important", wordWrap: "break-word" }}
        >
          {description}
        </p>
      </div>

      {/* Mobile View */}
      <div
        id={name}
        className="relative md:hidden border-b border-gray-300 collapsible"
      >
        {/* Accordion Header */}
        <div
          className={`flex justify-between items-start cursor-pointer flex-col `} // Disable clicks during transitions
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <h1 className="font-medium text-lg text-gray2">{name}</h1>
          <div className="flex justify-between items-center w-full">
            <h3 className="text-base font-light text-foreground whitespace-pre-line">
              {role}
            </h3>
            <p className="text-gray1 text-sm font-normal">
              {fromDate} - {toDate}
            </p>
          </div>
        </div>

        {/* Accordion Body */}
        <div
          className={`mt-4 max-h-0 overflow-hidden transition-all  duration-0 ${
            isOpen && "!duration-[1s] max-h-[400vh]"
          } `}
        >
          <div
            className="col-span-2 designTitle leading-8 text-foreground !whitespace-pre-line !break-words"
            style={{
              whiteSpace: "pre-line !important",
              wordWrap: "break-word",
            }}
          >
            {description}
          </div>
        </div>
        <div
          className="w-full flex items-center justify-center "
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <button className="focus:outline-none" aria-label="Toggle details">
            <SVGArrowUp
              className={`transition-all text-gray-300 my-2 rotate-0 ${
                isOpen && "rotate-180"
              }`}
            />
            {/* {isOpen === name ? "▲" : "▼"} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
