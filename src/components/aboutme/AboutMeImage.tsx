"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutMeImage() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, x: -48 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-w-[50%] h-full w-full lg:!w-full mx-auto md:mb-16"
    >
      <div className="absolute inset-0 rounded-lg bg-neutral-100 rotate-2 scale-[1.02]" />
      <Image
        src="/mobi.png"
        alt="Mobina Moghadam - UI/UX Designer"
        className="relative rounded-lg aspect-square drop-shadow-lg"
        width={1000}
        height={1000}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </motion.div>
  );
}
