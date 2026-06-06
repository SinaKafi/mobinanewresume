"use client";

import AOSInit from "./AOSInit";
import HeroSection from "./HeroSection";
import FeaturedWork from "./FeaturedWork";
import AboutPreview from "./AboutPreview";
import CTASection from "./CTASection";

type WorkItem = {
  title: string;
  cover: string;
  route: string;
  id: number;
};

export default function LandingPage({ featured }: { featured: WorkItem[] }) {
  return (
    <>
      <AOSInit />
      <div className="landing-full-bleed -mt-11">
        <HeroSection />
        <div className="container">
          <FeaturedWork items={featured} />
          <AboutPreview />
          <CTASection />
        </div>
      </div>
    </>
  );
}
