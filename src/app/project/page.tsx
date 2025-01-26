"use client";
import FreelanceCard from "@/components/experience/FreelanceCard";
import { PROJECTS } from "@/utils/datas";
import React, { useState } from "react";

const Projects = () => {
  const [isOpen, setIsOpen] = useState("6");

  return (
    <div className="flex flex-col gap-8">
      {PROJECTS.map((item) => (
        <FreelanceCard
          id={item.id.toString()}
          key={item.description}
          Icon={item.Icon}
          description={item.description}
          name={item.title}
          isOpen={isOpen === String(item.id)}
          setIsOpen={setIsOpen}
        />
        // <div className="flex flex-col gap-2 max-w-full" key={item.description}>
        //   <div className="flex gap-1 items-center">
        //     <SVGFreelancer className="leading-10" />
        //     <h2 className="text-[#2E2E2E] designHeading2 !text-xl">
        //       {item.title}
        //     </h2>
        //   </div>
        //   <p
        //     className="text-[#2E2E2E] designTitle"
        //     dangerouslySetInnerHTML={{ __html: item.description }}
        //   />
        // </div>
      ))}
    </div>
  );
};

export default Projects;
