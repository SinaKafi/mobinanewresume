import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import React from "react";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto">
      {DESIGNED.map((item) => (
        <ExperienceCard {...item} key={item.title + item.id} />
      ))}
    </div>
  );
}
