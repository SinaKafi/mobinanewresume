'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsPanels,
  TabsTrigger,
} from '@/components/tabs/AnimatedTabs';
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CASE_STUDIES, CASE_STUDY_SUBNAV_ID } from './constants';

export default function CaseStudyContent() {
  const [subnavRoot, setSubnavRoot] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setSubnavRoot(document.getElementById(CASE_STUDY_SUBNAV_ID));
  }, []);

  return (
    <Tabs defaultValue="TRACTOR" className="flex flex-col">
      {subnavRoot &&
        createPortal(
          <TabsList aria-label="Case studies">
            {CASE_STUDIES.map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                onTabChange={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>,
          subnavRoot
        )}
      <TabsPanels>
        {CASE_STUDIES.map(({ value, alt, src }) => (
          <TabsContent key={value} value={value}>
            <Image
              alt={alt}
              src={src}
              className="rounded-lg object-cover !mx-auto w-full h-full"
              width={10000}
              height={10000}
              sizes="100vw"
              priority
              fetchPriority="high"
            />
          </TabsContent>
        ))}
      </TabsPanels>
    </Tabs>
  );
}
