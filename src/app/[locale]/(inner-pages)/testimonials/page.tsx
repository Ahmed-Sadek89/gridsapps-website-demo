import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import TestimonialsWrapper from '@/components/Testimonials';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getTestimonials, getVideo } from '@/api/sections';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.testimonials}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function TeamPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.testimonials.header;
  const [testimonials, video] = await Promise.all([
    asyncHandler(async () => await getTestimonials(locale)),
    asyncHandler(async () => await getVideo(locale))
  ]);

  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
        image="/imgs/innser_pages.svg"
      />
      <TestimonialsWrapper data={testimonials} video={video} />
    </>
  )
}
