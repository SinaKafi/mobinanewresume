import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IExperienceCard {
  title: string;
  cover: string;
  route: string; // Changed to lowercase 'string'
}

const ExperienceCard: React.FC<IExperienceCard> = ({ cover, title, route }) => {
  return (
    <Link
      href={`/gallery/${route}`}
      className="w-full ExperienceCard cursor-pointer"
    >
      <div className="flex flex-col items-center justify-between gap-6">
        {/* Image Container */}
        <div className="overflow-hidden transition-shadow designedShadow p-4">
          <Image
            src={cover}
            alt={`Cover image for ${title}`}
            width={400}
            height={400}
            className="block rounded-lg"
          />
        </div>
        {/* Title */}
        <div>
          <h3 className="relative text-center text-lg font-light text-gray2">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
