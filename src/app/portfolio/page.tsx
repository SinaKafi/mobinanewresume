import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Mobina Moghadam | Portfolio",
  description: "UI/UX Designer Portfolio - Mobina Moghadam",
  openGraph: {
    title: "Mobina Moghadam | Portfolio",
    description: "Discover the creative UI/UX designs by Mobina Moghadam.",
    url: "https://www.mobinamoghadam.art/portfolio",
    type: "website",
    images: [
      {
        url: "https://www.mobinamoghadam.art/mobi.png",
        width: 1200,
        height: 630,
        alt: "Mobina Moghadam Portfolio",
      },
    ],
  },

  themeColor: "#dddddd",
};
export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto">
      {DESIGNED.map((item) => (
        <ExperienceCard {...item} key={item.title + item.id} />
      ))}
    </div>
  );
}
