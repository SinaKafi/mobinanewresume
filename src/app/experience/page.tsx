import JobCard from "@/components/experience/JobCard";
import { EXPERIENCE } from "@/utils/datas";
import React from "react";

export default function experience() {
  return (
    <div className="flex flex-col gap-8">
      {EXPERIENCE.map((item) => (
        <JobCard {...item} key={item.id} />
      ))}
    </div>
  );
}
