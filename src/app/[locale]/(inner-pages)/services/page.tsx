import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import ServicesList from '@/components/Services';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getAllSections } from '@/api/home';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.services}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function ServicesPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.services.header;

  const { services } = await asyncHandler(async () => await getAllSections(locale)) || {};

  return (
    <main>
      <Header
        title={translations.title}
        description={translations.description}
      />
      <ServicesList data={services?.topics || []} />
    </main>
  )
}
