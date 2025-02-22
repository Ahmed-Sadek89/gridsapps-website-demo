export const metadata = {
  title: 'GridsApps - Page not found',
  description: 'Transform your business with Grids - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
