'use client';

import PageHero from '@/components/animations/PageHero';
import { useAOSRefresh } from '@/hooks/useAOSRefresh';
import AboutMeImage from './AboutMeImage';

export default function AboutMeContent() {
  useAOSRefresh();

  return (
    <>
      <PageHero
        watermark="ABOUT"
        title="About Me"
        subtitle="Product designer with a passion for empathy-driven, user-centered design."
      />

      <div className="flex flex-col gap-20 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <AboutMeImage />

          <div
            className="h-full leading-relaxed text-sm sm:text-base lg:text-lg"
            data-aos="fade-left"
            data-aos-offset="100"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              I&apos;m Mobina Moghadam
            </h2>
            <p
              className="mt-4 text-gray-700"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I&apos;m a Product Designer, and I strongly believe that empathy
              is at the core of creating meaningful and effective designs. To
              truly understand and connect with users, a designer needs to
              develop a habit of observing everything in their surroundings with
              care and clarity, noticing the details that others might overlook.
            </p>
            <p
              className="mt-4 text-gray-700"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              I believe a great product designer anticipates user needs and
              delivers intuitive solutions. By observing my surroundings, I fuel
              creativity and design experiences that feel natural, engaging, and
              user-friendly.
            </p>
            <p
              className="mt-4 text-gray-700"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I&apos;ve been working in the design field for over 10 years. My
              journey started with exciting graphic design projects, which
              eventually led me to discover my passion for UI/UX design. For the
              past 5 years, I&apos;ve been gaining hands-on experience in this
              field.
            </p>
            <p
              className="mt-4 text-gray-700"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              I&apos;m continuously seeking to expand my knowledge in this area.
            </p>
          </div>

          <div
            className="h-full flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="100"
          >
            <h2 className="designHeading">Courses I took</h2>
            <ul className="list-disc list-inside space-y-2">
              <li data-aos="fade-up" data-aos-delay="150">
                <span className="designTitleBold">amanjacademy:</span>
                <p className="designTitle pl-5">Product Design Course.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <span className="designTitleBold">userx academy:</span>
                <p className="designTitle pl-5">
                  Comprehensive product design course.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <span className="designTitleBold">sevenlearn academy:</span>
                <p className="designTitle pl-5">
                  Comprehensive user interface design course.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <span className="designTitleBold">invers school:</span>
                <p className="designTitle pl-5">Digital paintings.</p>
                <p className="designTitle pl-5">Stop motion.</p>
              </li>
            </ul>
          </div>

          <div
            className="h-full flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="100"
          >
            <h2 className="designHeading">University education</h2>
            <p className="designTitle">
              I have a Bachelor&apos;s degree in graphic design, which has
              definitely played a big role in shaping my creative journey
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
