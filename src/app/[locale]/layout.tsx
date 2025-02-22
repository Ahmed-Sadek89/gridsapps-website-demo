import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from 'sonner';
//= Providers
import { StoreProvider } from '@/store/provider';
//= Components
import ProgressBar from '@/components/UIs/ProgressBar';
import WhatsappWidget from '@/components/Common/WhatsAppWidget';
//= I18n
import { Locale, i18n } from '@/i18n.config';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getSiteMetadata } from '@/api/home';
//= Types
import type { Metadata } from 'next';
//= Styles
import '@/styles/globals.scss';
import 'swiper/css/bundle';
import 'lightgallery/scss/lightgallery.scss';
// import '@sweetalert2/theme-wordpress-admin/wordpress-admin.css'; return it back

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const metadata = await asyncHandler(async () => await getSiteMetadata(params.locale));

  return {
    title: metadata?.site_title || '',
    description: metadata?.site_desc || '',
    keywords: metadata?.site_keywords.split(params.locale === 'ar' ? '،' : ','),
    openGraph: {
      title: metadata?.site_title || '',
      description: metadata?.site_desc || '',
      url: metadata?.site_url || '',
      siteName: metadata?.site_title || '',
      locale: params.locale,
      type: 'website',
    }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }))
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: Locale } }) {

  return (
    <html lang={params.locale}>
      <body data-theme='light'>
        <StoreProvider>
          <main>
            {children}
            <WhatsappWidget />
          </main>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 5000
            }}
          />
          <ProgressBar />
        </StoreProvider>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSBBCVH" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <GoogleTagManager gtmId="GTM-KSBBCVH" />
        <GoogleAnalytics gaId="GTM-KSBBCVH" />
        <Script strategy="beforeInteractive" src="https://js.lahza.io/inline.min.js"></Script>
      </body>
    </html>
  )
}
