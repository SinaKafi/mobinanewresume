import Image from "next/image";
import React from "react";

const caseStudy = () => {
  return (
    <div className="!min-h-max !max-h-fit w-full h-auto bg-slate-200 ">
      <Image
        alt="Tractorapp"
        src={"/TractorAppCaseStudy.png"}
        // quality={1000}
        // fill
        className="object-cover !mx-auto w-full h-full"
        // fill
        // priority

        width={1000}
        height={1000}
        loading={"lazy"}
      />
    </div>
  );
};

export default caseStudy;
