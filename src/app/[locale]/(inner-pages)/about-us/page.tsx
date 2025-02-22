import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import AboutWrapper from '@/components/About';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getTeam, getTestimonials, getVideo } from '@/api/sections';
import { getAboutData, getAboutHistory } from '@/api';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.about}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function PortfolioPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.about.header;
  const [aboutData, aboutHistory, team, testimonials, video] = await Promise.all([
    asyncHandler(async () => await getAboutData(locale)),
    asyncHandler(async () => await getAboutHistory(locale)),
    asyncHandler(async () => await getTeam(locale)),
    asyncHandler(async () => await getTestimonials(locale)),
    asyncHandler(async () => await getVideo(locale))
  ]);

  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
      />
      <AboutWrapper
        data={{ aboutData, aboutHistory, platforms: undefined, video, team, testimonials }}
      />
    </>
  )
}
