'use client';

import PageHero from '@/components/animations/PageHero';
import FreelanceCard from '@/components/experience/FreelanceCard';
import { PROJECTS } from '@/utils/datas';
import { useState } from 'react';

export default function Projects() {
  const [isOpen, setIsOpen] = useState('');

  return (
    <>
      <PageHero
        watermark="PROJECTS"
        title="Projects"
        subtitle="Highlight initiatives spanning healthcare, automotive e-commerce, blockchain, and organizational tools."
      />
      <div className="flex flex-col gap-8">
        {PROJECTS.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <FreelanceCard
              id={item.id.toString()}
              Icon={item.Icon}
              description={item.description}
              name={item.title}
              isOpen={isOpen === String(item.id)}
              setIsOpen={setIsOpen}
            />
          </div>
        ))}
      </div>
    </>
  );
}
