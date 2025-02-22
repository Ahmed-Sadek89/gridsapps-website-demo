import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import ServicesCategoriesList from '@/components/ServicesCategories';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getAllSections } from '@/api/home';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.servicesCategories}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function ServicesCategoriesPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.servicesCategories.header;

  const { services } = await asyncHandler(async () => await getAllSections(locale)) || {};

  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
      />
      <ServicesCategoriesList data={services?.topics || []} />
    </>
  )
}
