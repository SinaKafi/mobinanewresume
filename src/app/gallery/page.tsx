import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import React from "react";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-12 w-full  items-center mx-auto">
      {DESIGNED.map((item) => (
        // <div className="w-full">
        <ExperienceCard {...item} key={item.title + item.id} />
        // </div>
      ))}
    </div>
  );
}
