"use client";

import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { m } from "@/lib/motion";
import { useRef } from "react";

const STATS = [
  { value: "10+", label: "Years in Design" },
  { value: "5+", label: "Years in UI/UX" },
  { value: "40+", label: "Projects Delivered" },
];

export default function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["15%", "-18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 border-t border-neutral-100 relative overflow-hidden"
    >
      <m.div
        style={{ x: bgX }}
        className="absolute top-1/2 -right-8 text-[clamp(3rem,8vw,6rem)] font-medium text-neutral-50 select-none pointer-events-none"
        aria-hidden
      >
        EMPATHY
      </m.div>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <m.div style={{ y: imageY }} className="relative">
          <div
            data-aos="fade-right"
            className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl"
          >
            <Image
              src="/vector.svg"
              alt="Mobina Moghadam logo"
              width={400}
              height={400}
              className="w-full h-full object-contain p-16 bg-neutral-50"
            />
          </div>
        </m.div>

        <m.div style={{ y: textY }} className="space-y-8">
          <div data-aos="fade-left">
            <p className="text-xs tracking-[0.3em] uppercase text-gray1 font-light mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Designing with empathy
            </h2>
            <p className="text-base md:text-lg font-light text-gray1 leading-relaxed">
              I believe great product design starts with understanding people.
              From automotive e-commerce to healthcare apps, I create interfaces
              that feel natural, engaging, and built around real user needs.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="grid grid-cols-3 gap-6 pt-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-light text-gray1 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div data-aos="fade-left" data-aos-delay="250">
            <Link
              href="/aboutme"
              className="inline-flex items-center gap-2 text-sm font-light border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
            >
              Read my story
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}
