"use client";

import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import PortfolioDetailText from "@/components/portfolio/PortfolioDetailText";
import { useAOSRefresh } from "@/hooks/useAOSRefresh";
import { DESIGNED } from "@/utils/datas";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface PortfolioDetailLayoutProps {
  projectId: number;
  images?: string[];
  title?: string;
  children: ReactNode;
}

export default function PortfolioDetailLayout({
  projectId,
  images,
  title,
  children,
}: PortfolioDetailLayoutProps) {
  useAOSRefresh();
  const reducedMotion = useReducedMotion();
  const related = DESIGNED.filter((item) => item.id !== projectId);

  return (
    <div className="flex flex-col justify-between space-y-8">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        data-aos="fade-up"
        data-aos-offset="60"
      >
        <ImageSlider array={images} title={title} />
      </motion.div>

      <PortfolioDetailText>{children}</PortfolioDetailText>

      <div
        className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray-200"
        data-aos="fade-up"
        data-aos-offset="80"
      >
        {related.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
            <motion.div
              whileHover={reducedMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ExperienceCard {...item} hideTitle />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
