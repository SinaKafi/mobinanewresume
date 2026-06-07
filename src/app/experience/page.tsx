"use client";

import PageHero from "@/components/animations/PageHero";
import JobCard from "@/components/experience/JobCard";
import { EXPERIENCE } from "@/utils/datas";
import { useState } from "react";

export default function Experience() {
  const [isOpen, setIsOpen] = useState("DARIC HOLDING");

  return (
    <>
      <PageHero
        watermark="CAREER"
        title="Experience"
        subtitle="Six years of design across product, UI/UX, and visual design—from freelance roots to senior roles in automotive and e-commerce."
      />
      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <JobCard
              {...item}
              isOpen={isOpen === item.name}
              setIsOpen={setIsOpen}
            />
          </div>
        ))}
      </div>
    </>
  );
}
