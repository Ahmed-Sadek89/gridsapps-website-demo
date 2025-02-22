import React from 'react';
//= Components
import InnerPageLayout from "@/components/Layouts/InnerPages";

export const metadata = {
  title: 'GridsApps - Inner Page',
  description: 'Transform your business with Grids - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
}

export default function InnerPagesRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <InnerPageLayout>
      {children}
    </InnerPageLayout>
  )
}
