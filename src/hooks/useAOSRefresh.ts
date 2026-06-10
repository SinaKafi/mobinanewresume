'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AOS from 'aos';

export function useAOSRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);
}
