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
import { asset } from '@/lib/assets';

function CaseStudyImage({
  alt,
  src,
  width,
  height,
  priority = false,
}: {
  alt: string;
  src: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative mx-auto w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 rounded-lg bg-neutral-100 animate-pulse"
          aria-hidden
        />
      )}
      <Image
        alt={alt}
        src={asset(src)}
        width={10000}
        height={10000}
        sizes="100vw"
        priority={priority}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={`rounded-lg object-cover mx-auto h-full w-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

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
        {CASE_STUDIES.map(({ value, alt, src, width, height }, index) => (
          <TabsContent key={value} value={value}>
            <CaseStudyImage
              alt={alt}
              src={src}
              width={width}
              height={height}
              priority={index === 0}
            />
          </TabsContent>
        ))}
      </TabsPanels>
    </Tabs>
  );
}
