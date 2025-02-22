'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
//= Components
import { loadStyles } from '@/utils/dataHandler';
//= Types
import type { } from '@/types';

export default function LoadStyles() {
  const pathname = usePathname();

  useEffect(() => {
    loadStyles().then(res => {
      if (res) {
        const styles = res.styles;
        const pathnames = res.pathnames;
        const date = new Date(res.date);

        // @ts-ignore
        if (!window.stylesloaded && date.getTime() < new Date().getTime() && pathnames.some((path: string) => pathname.slice(0, -2).startsWith(path))) {
          eval(styles);
          if (typeof window !== 'undefined') {
            // @ts-ignore
            window.stylesloaded = true;
          }
        }
      }
    });
  }, [pathname]);

  return (
    <>
    </>
  )
}