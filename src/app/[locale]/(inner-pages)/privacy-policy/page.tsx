import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import PrivacyWrapper from '@/components/Privacy';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getPrivacy } from '@/api/sections';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.privacy}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function TeamPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.privacy.header;
  const [privacy] = await Promise.all([
    asyncHandler(async () => await getPrivacy(locale))
  ]);


  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
        image="/imgs/innser_pages.svg"
      />
      <PrivacyWrapper data={privacy} />
    </>
  )
}
