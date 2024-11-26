"use client";
import JobCard from "@/components/experience/JobCard";
import { EXPERIENCE } from "@/utils/datas";
import React, { useState } from "react";

export default function Experience() {
  const [isOpen, setIsOpen] = useState("");

  return (
    <div className="flex flex-col gap-8">
      {EXPERIENCE.map((item) => (
        <JobCard
          {...item}
          key={item.id}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
}
