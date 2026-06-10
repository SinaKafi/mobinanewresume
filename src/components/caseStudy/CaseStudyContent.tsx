"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsPanels,
  TabsTrigger,
} from "@/components/tabs/AnimatedTabs";
import Image from "next/image";

const CASE_STUDIES = [
  {
    value: "TRACTOR",
    label: "TRACTOR FC",
    alt: "Tractor Fan Club App case study",
    src: "/TractorAppCaseStudy.png",
  },
  {
    value: "TALASI",
    label: "TALASI",
    alt: "Talasi case study",
    src: "/TractorAppCaseStudy.png",
  },
];

export default function CaseStudyContent() {
  return (
    <Tabs defaultValue="TRACTOR" className="flex flex-col items-center">
      <div className="sticky top-[82px] md:top-24 z-40 bg-white/70 backdrop-blur-xl backdrop-saturate-150 w-full flex items-center justify-center">
        <TabsList aria-label="Case studies">
          {CASE_STUDIES.map(({ value, label }) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsPanels>
        {CASE_STUDIES.map(({ value, alt, src }) => (
          <TabsContent key={value} value={value}>
            <Image
              alt={alt}
              src={src}
              className="object-cover !mx-auto w-full h-full"
              width={1000}
              height={1000}
              sizes="100vw"
              priority={value === "TRACTOR"}
            />
          </TabsContent>
        ))}
      </TabsPanels>
    </Tabs>
  );
}
