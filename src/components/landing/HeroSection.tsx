'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { m } from '@/lib/motion';
import { useRef } from 'react';

const CV_FILENAME = 'MobinaMoghadamCV.pdf';
const CV_HREF = `/${CV_FILENAME}`;

function CvDownloadLink({ className }: { className?: string }) {
  return (
    <a
      href={CV_HREF}
      download={CV_FILENAME}
      type="application/pdf"
      className={className}
    >
      Download CV
    </a>
  );
}

function HeroStatic() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pb-28 sm:pb-36 md:pb-44">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute top-[10%] -left-[10%] w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
        <div className="absolute bottom-[5%] -right-[5%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-neutral-200/60 blur-3xl" />
      </div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-28">
        <div className="order-2 lg:order-1 space-y-8">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-gray1 font-light">
            Product Designer · UI/UX
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-foreground leading-[1.05] tracking-tight">
            Mobina
            <br />
            <span className="font-light text-gray1">Moghadam</span>
          </h1>
          <p className="text-base md:text-lg font-light text-gray1 max-w-md leading-relaxed">
            Crafting intuitive digital experiences with empathy at the
            center—across apps, websites, and product ecosystems.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <CvDownloadLink className="bg-foreground text-background px-8 py-3 rounded text-sm font-light hover:opacity-90 transition-opacity w-full sm:w-auto text-center" />
            <Link
              href="/contact"
              className="border border-foreground/20 px-8 py-3 rounded text-sm font-light hover:border-foreground/50 transition-colors w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-square">
            <div className="absolute inset-0 rounded-2xl bg-neutral-100 -rotate-3 scale-[1.02]" />
            <Image
              src="/mobi.png"
              alt="Mobina Moghadam"
              width={800}
              height={800}
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="relative rounded-2xl object-cover w-full h-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAnimated() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageYRaw = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imageY = useSpring(imageYRaw, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pb-28 sm:pb-36 md:pb-44"
    >
      <m.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-[10%] -left-[10%] w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
        <div className="absolute bottom-[5%] -right-[5%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-neutral-200/60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-px bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent" />
      </m.div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-28">
        <m.div
          style={{ y: contentY, opacity, scale }}
          className="order-2 lg:order-1 space-y-8 will-change-transform [backface-visibility:hidden]"
        >
          <m.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-gray1 font-light"
          >
            Product Designer · UI/UX
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-foreground leading-[1.05] tracking-tight"
          >
            Mobina
            <br />
            <span className="font-light text-gray1">Moghadam</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base md:text-lg font-light text-gray1 max-w-md leading-relaxed"
          >
            Crafting intuitive digital experiences with empathy at the
            center—across apps, websites, and product ecosystems.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <CvDownloadLink className="bg-foreground text-background px-8 py-3 rounded text-sm font-light hover:opacity-90 transition-opacity w-full sm:w-auto text-center" />
            <Link
              href="/contact"
              className="border border-foreground/20 px-8 py-3 rounded text-sm font-light hover:border-foreground/50 transition-colors w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </m.div>
        </m.div>

        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <m.div
            style={{ y: imageY, willChange: 'transform' }}
            className="relative w-full max-w-[420px] aspect-square"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <div className="absolute inset-0 rounded-2xl bg-neutral-100 -rotate-3 scale-[1.02]" />
              <Image
                src="/mobi.png"
                alt="Mobina Moghadam"
                width={800}
                height={800}
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="relative rounded-2xl object-cover w-full h-full drop-shadow-2xl"
              />
            </m.div>
          </m.div>
        </div>
      </div>

      <m.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </m.div>
    </section>
  );
}

export default function HeroSection() {
  const reducedMotion = useReducedMotion();
  return reducedMotion ? <HeroStatic /> : <HeroAnimated />;
}
