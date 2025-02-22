import React from 'react';
//= Components
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Home/Header';
import Footer from '@/components/Common/Footer';
import LoadStyles from '@/components/Common/LoadStyles/Styles';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getContactData, getSocialLinks } from '@/api/home';

type Props = {
  children: React.ReactNode;
}

async function HomePageLayout({ children }: Props) {
  const { locale } = await getDictionary();
  const [socials, contactData] = await Promise.all([
    asyncHandler(getSocialLinks),
    asyncHandler(async () => await getContactData(locale)),
  ]);

  return (
    <>
      <Navbar />
      <Header />
      {children}
      <LoadStyles />
      <Footer data={{ socials, contactData }} />
    </>
  )
}

export default HomePageLayout