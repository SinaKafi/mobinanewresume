import Image from "next/image";
import React from "react";

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
