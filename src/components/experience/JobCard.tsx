"use client";
// // import React from "react";
// // interface IJobCard {
// //   name: string;
// //   role: string;
// //   description: any;
// //   fromDate: string;
// //   toDate: string;
// // }
// // const JobCard: React.FC<IJobCard> = ({
// //   fromDate,
// //   name,
// //   role,
// //   toDate,
// //   description,
// // }) => {
// //   return (
// //     <div className="grid grid-cols-3 hover:!text-blue-600">
// //       <div className="col-span-1 flex flex-col items-start justify-start gap-4">
// //         <h1 className=" font-medium text-2xl text-gray2">{name}</h1>
// //         <h3 className=" text-xl font-light text-foreground whitespace-pre-line">
// //           {role}
// //         </h3>
// //         <p className=" text-gray1 text-lg font-normal">
// //           {fromDate} - {toDate}
// //         </p>
// //       </div>
// //       <div className="col-span-2 text-justify  whitespace-pre-line text-lg font-light leading-8 text-foreground">
// //         {" "}
// //         {description}
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobCard;
// import React, { useState } from "react";

// interface IJobCard {
//   name: string;
//   role: string;
//   description: any;
//   fromDate: string;
//   toDate: string;
// }

// const JobCard: React.FC<IJobCard> = ({
//   fromDate,
//   name,
//   role,
//   toDate,
//   description,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200 py-4">
//       {/* Accordion Header */}
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <h1 className="font-medium text-lg text-gray2">{name}</h1>
//         <button
//           className="text-gray2500 focus:outline-none"
//           aria-label="Toggle details"
//         >
//           {isOpen ? "▲" : "▼"}
//         </button>
//       </div>

//       {/* Accordion Body */}
//       {isOpen && (
//         <div className="mt-4">
//           <h3 className="text-md font-light text-gray2">{role}</h3>
//           <p className="text-gray2500 text-sm font-normal">
//             {fromDate} - {toDate}
//           </p>
//           <p className="mt-2 text-justify text-sm font-light text-gray2 leading-6">
//             {description}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobCard;
import React from "react";

interface IJobCard {
  name: string;
  role: string;
  description: string;
  fromDate: string;
  toDate: string;
  setIsOpen: (_: string) => void;
  isOpen: string;
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
    if (isOpen === name) {
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
      <div className="hidden md:grid grid-cols-3 hover:!text-blue-600">
        <div className="col-span-1 flex flex-col items-start justify-start gap-4">
          <h1 className="designHeading text-gray2">{name}</h1>
          <h3 className="designHeading2 !font-light text-foreground whitespace-pre-line">
            {role}
          </h3>
          <p className="designHeading2 !text-gray1 !font-normal">
            {fromDate} - {toDate}
          </p>
        </div>
        <div className="col-span-2  whitespace-pre-line designTitle leading-8 text-foreground">
          {description}
        </div>
      </div>

      {/* Mobile View */}
      <div
        id={name}
        // data-icon={isOpen === name ? "▲" : "▼"}
        className="relative md:hidden border-b border-gray1 collapsible"
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
            isOpen === name && "!duration-[1s] max-h-[400vh]"
          } `}
        >
          <div className="text-left whitespace-pre-line  designTitle leading-8 text-foreground">
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
          <button
            className="text-gray2500 focus:outline-none"
            aria-label="Toggle details"
          >
            {isOpen === name ? "▲" : "▼"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
