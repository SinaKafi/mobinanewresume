"use client";

import PageHero from "@/components/animations/PageHero";
import ParallaxLayer from "@/components/animations/ParallaxLayer";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ExperienceCard from "@/components/GalleryCard";
import { useAOSRefresh } from "@/hooks/useAOSRefresh";
import { DESIGNED } from "@/utils/datas";
import { motion } from "framer-motion";

export default function PortfolioGallery() {
  useAOSRefresh();

  return (
    <>
      <PageHero
        watermark="WORK"
        title="Portfolio"
        subtitle="A selection of apps, websites, and product experiences I've designed across automotive, healthcare, and e-commerce."
      />
      <ParallaxSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto">
        {DESIGNED.map((item, index) => (
          <div
            key={item.title + item.id}
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <ParallaxLayer speed={index % 3 === 1 ? 0.18 : index % 3 === 2 ? 0.08 : 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ExperienceCard {...item} priority={index < 3} />
              </motion.div>
            </ParallaxLayer>
          </div>
        ))}
      </ParallaxSection>
    </>
  );
}
