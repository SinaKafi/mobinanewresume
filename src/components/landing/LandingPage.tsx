'use client';

import HeroSection from './HeroSection';
import FeaturedWork from './FeaturedWork';
import AboutPreview from './AboutPreview';
import CTASection from './CTASection';

type WorkItem = {
  title: string;
  cover: string;
  route: string;
  id: number;
};

export default function LandingPage({ featured }: { featured: WorkItem[] }) {
  return (
    <div className="landing-full-bleed -mt-11">
      <div className="relative">
        <HeroSection />

        <div className="relative z-10 -mt-24 sm:-mt-32 md:-mt-40 bg-background rounded-t-[1.75rem] sm:rounded-t-[2rem] md:rounded-t-[2.5rem] shadow-[0_-24px_48px_rgba(0,0,0,0.04)]">
          <div className="container">
            <FeaturedWork items={featured} />
            <AboutPreview />
            <CTASection />
          </div>
        </div>
      </div>
    </div>
  );
}
