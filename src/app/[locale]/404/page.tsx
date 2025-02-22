import Link from 'next/link';
//= Components
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getContactData, getSocialLinks } from '@/api/home';
//= Styles
import cls from "./404.module.scss";

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.notFound}`,
    description: 'Transform your business with Grids - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

async function Custom404() {
  const { translations, locale } = await getDictionary();
  const [socials, contactData] = await Promise.all([
    asyncHandler(getSocialLinks),
    asyncHandler(async () => await getContactData(locale)),
  ]);

  return (
    <>
      <Navbar />
      <div className={`${cls.notFound}`}>
        <div className={cls.container}>
          <div className={cls.wrapper}>
            <div className={cls.item}>
              <img loading='lazy' src="/imgs/404.svg" alt="not found image" />
            </div>
            <div className={cls.item}>
              <h1>404</h1>
              <p>{translations.notFound.text}</p>
              <Link className={cls.btnPrimar} href="/">{translations.notFound.btn}</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer data={{ socials, contactData }} />
    </>
  );
};


export default Custom404;
