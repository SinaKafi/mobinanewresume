import { PROJECTS } from "@/utils/datas";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-16 p-4 md:p-8">
      {PROJECTS.map((item) => (
        <div
          className="flex flex-col gap-2 max-w-full md:max-w-[90%] lg:max-w-[80%]"
          key={item.description}
        >
          <h2 className="text-[#2E2E2E] font-medium text-xl md:text-2xl leading-8 md:leading-9 lg:leading-10">
            {item.title}
          </h2>
          <p
            className="text-[#2E2E2E] font-light text-base md:text-lg leading-6 md:leading-8 lg:leading-9"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
