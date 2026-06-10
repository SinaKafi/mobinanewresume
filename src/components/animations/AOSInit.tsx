'use client';

import { useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

let aosInitialized = false;

export default function AOSInit() {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reducedMotion) {
      AOS.init({ disable: true });
      return;
    }

    if (!aosInitialized) {
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        offset: 80,
        // once: true,
        // mirror: false,
        once: false,
        mirror: true,
      });
      aosInitialized = true;
    }

    // Re-scan DOM after client-side route changes and dynamic content
    const frame = requestAnimationFrame(() => {
      AOS.refresh();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, reducedMotion]);

  return null;
}
