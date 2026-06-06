"use client";

import ExperienceCard from "@/components/GalleryCard";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type WorkItem = {
  title: string;
  cover: string;
  route: string;
  id: number;
};

export default function FeaturedWork({ items }: { items: WorkItem[] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <motion.div
        style={{ x: labelX }}
        className="absolute -top-4 left-0 text-[clamp(4rem,12vw,10rem)] font-medium text-neutral-100 select-none pointer-events-none leading-none"
        aria-hidden
      >
        WORK
      </motion.div>

      <div className="relative z-10">
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray1 font-light mb-3">
              Selected Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground">
              Featured Work
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-light text-gray1 hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <ExperienceCard {...item} priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
