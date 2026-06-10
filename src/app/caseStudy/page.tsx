import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import React from "react";

export const metadata = createPageMetadata({
  title: "Case Study",
  description:
    "Tractor Fan Club App case study — product design process, research, and UI/UX outcomes.",
  path: "/caseStudy",
});

const caseStudy = () => {
  return (
    <div className="!min-h-max !max-h-fit w-full h-auto bg-slate-200 ">
      <Image
        alt="Tractor Fan Club App case study"
        src="/TractorAppCaseStudy.png"
        className="object-cover !mx-auto w-full h-full"
        width={1000}
        height={1000}
        sizes="100vw"
        priority
      />
    </div>
  );
};

export default caseStudy;
