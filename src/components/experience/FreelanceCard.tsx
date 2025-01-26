"use client";
import React from "react";
import SVGArrowUp from "../SVGS/SVGArrowUp";

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
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 85;
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
      setIsOpen(id);
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    }
  };

  return (
    <div className="freelanceCard py-4">
      {/* Desktop View */}
      <div className="hidden md:flex  flex-col gap-2">
        <div className="col-span-1 flex items-center justify-start gap-2">
          <img src={Icon} className="!inline-flex" width={36} height={36} />
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
        <div
          className={`flex items-start flex-col cursor-pointer gap-1`} // Disable clicks during transitions
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <img
            src={Icon}
            width={27}
            height={27}
            className="inline-flex !mr-auto pr-1"
          />

          <h1 className="font-medium text-lg text-gray2">{name}</h1>
          {/* <div className="flex justify-between items-center w-full"></div> */}
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
            dangerouslySetInnerHTML={{ __html: description }}
          >
            {/* {description} */}
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
              className={`transition-all text-[#2E2E2E] my-2 rotate-0 ${
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

export default FreelanceCard;
