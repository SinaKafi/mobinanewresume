'use client';

import PageHero from '@/components/animations/PageHero';
import ParallaxLayer from '@/components/animations/ParallaxLayer';
import ParallaxSection from '@/components/animations/ParallaxSection';
import SVGCopied from '@/components/SVGS/SVGCopied';
import SVGCopy from '@/components/SVGS/SVGCopy';
import SVGDrible from '@/components/SVGS/SVGDrible';
import SVGLinkdin from '@/components/SVGS/SVGLinkdin';
import SVGMail from '@/components/SVGS/SVGMail';
import { useEffect, useState } from 'react';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'mmoghadam376@gmail.com',
    href: 'mailto:mmoghadam376@gmail.com',
    copyText: 'mmoghadam376@gmail.com',
    key: 'email' as const,
  },
  {
    label: 'Phone',
    value: '09223693919',
    href: 'tel:09223693919',
    copyText: '09223693919',
    key: 'mobile' as const,
  },
];

const SOCIAL_LINKS = [
  { href: 'mailto:mmoghadam376@gmail.com', label: 'Email', icon: SVGMail },
  {
    href: 'https://dribbble.com/mobinadesign',
    label: 'Dribbble',
    icon: SVGDrible,
  },
  {
    href: 'https://www.linkedin.com/in/mobina-moghadam-1424aa209/',
    label: 'LinkedIn',
    icon: SVGLinkdin,
  },
];

export default function ContactContent() {
  const [isCopied, setIsCopied] = useState({ mobile: false, email: false });

  useEffect(() => {
    if (!isCopied.email) return;
    const t = setTimeout(
      () => setIsCopied((p) => ({ ...p, email: false })),
      1500
    );
    return () => clearTimeout(t);
  }, [isCopied.email]);

  useEffect(() => {
    if (!isCopied.mobile) return;
    const t = setTimeout(
      () => setIsCopied((p) => ({ ...p, mobile: false })),
      1500
    );
    return () => clearTimeout(t);
  }, [isCopied.mobile]);

  return (
    <>
      <PageHero
        watermark="HELLO"
        title="Contact Me"
        subtitle="Interested in collaboration or want to learn more about my work? I'd love to hear from you."
      />

      <ParallaxSection className="relative pb-16 md:pb-24">
        <div
          className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-neutral-100 blur-3xl opacity-70 -z-10 pointer-events-none"
          aria-hidden
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div data-aos="fade-right" className="space-y-6">
            <p className="designTitle leading-8">
              If you&apos;re interested in collaboration or want to learn more
              about my projects, I&apos;d be happy to connect with you.
            </p>
            <p className="designTitle leading-8">
              Looking forward to hearing from you!
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex gap-4 pt-4"
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={social.label}
                  className="cursor-pointer p-2 transition-transform scale-90 hover:scale-110"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <ParallaxLayer speed={0.08}>
            <div
              data-aos="fade-left"
              className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm space-y-8"
            >
              <h2 className="designHeading contactMe !relative">
                Get in touch
              </h2>

              <div className="space-y-6">
                {CONTACT_LINKS.map((item, index) => (
                  <div
                    key={item.key}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex flex-wrap gap-2 items-center border-b border-neutral-100 pb-6 last:border-0 last:pb-0"
                  >
                    <p className="designTitleBold w-full sm:w-auto">
                      {item.label}:
                    </p>
                    <a
                      href={item.href}
                      className="designTitleBold hover:opacity-70 transition-opacity"
                    >
                      {item.value}
                    </a>
                    <button
                      type="button"
                      className="relative ml-1 cursor-pointer"
                      aria-label={`Copy ${item.label}`}
                      onClick={() => {
                        navigator.clipboard.writeText(item.copyText);
                        setIsCopied((prev) => ({ ...prev, [item.key]: true }));
                      }}
                    >
                      {isCopied[item.key] ? <SVGCopied /> : <SVGCopy />}
                      <span
                        className={`tooltip absolute z-50 mt-1 whitespace-normal break-words rounded-lg bg-foreground duration-300 py-1.5 px-3 scale-0 font-sans text-sm font-normal text-white transition-all opacity-0 ${
                          isCopied[item.key] ? 'opacity-100 scale-100' : ''
                        }`}
                      >
                        copied
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </ParallaxSection>
    </>
  );
}
