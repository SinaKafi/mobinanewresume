import Image from "next/image";
import React from "react";
interface IExperienceCard {
  title: string;
  cover: string;
}
const ExperienceCard: React.FC<IExperienceCard> = ({ cover, title }) => {
  return (
    <div className=" w-full ExperienceCard cursor-pointer">
      <div className="flex flex-col items-center justify-between gap-11">
        <div className="overflow-hidden transition-shadow designedShadow p-4``">
          <Image
            src={cover}
            alt=""
            width={400}
            height={400}
            className="block  "
          />
        </div>
        <div>
          <h3 className="relative text-center text-lg font-light text-gray2">
            {title}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
