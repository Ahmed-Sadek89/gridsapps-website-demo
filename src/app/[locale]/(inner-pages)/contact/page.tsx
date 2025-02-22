import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import ContactWrapper from '@/components/Contact';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getAddresses } from '@/api/sections';
import { getContactData, getSocialLinks } from '@/api/home';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.contact}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function TeamPage() {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.contact.header;
  const [addresses, socials, contactData] = await Promise.all([
    asyncHandler(async () => await getAddresses(locale)),
    asyncHandler(getSocialLinks),
    asyncHandler(async () => await getContactData(locale)),
  ]);

  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
        image="/imgs/innser_pages.svg"
      />
      <ContactWrapper data={{ addresses, socials, contactData }} />
    </>
  )
}
