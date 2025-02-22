import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import PortfolioWrapper from '@/components/Portfolio';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getTestimonials, getVideo } from '@/api/sections';
import { getWebProjects } from '@/api';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.portfolio}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function PortfolioPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.portfolio.header;
  const [webProjects, testimonials, video] = await Promise.all([
    asyncHandler(async () => await getWebProjects(locale)),
    asyncHandler(async () => await getTestimonials(locale)),
    asyncHandler(async () => await getVideo(locale))
  ]);

  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
      />
      <PortfolioWrapper data={{ webProjects, testimonials, video }} />
    </>
  )
}
