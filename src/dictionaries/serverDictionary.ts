import { headers } from 'next/headers';
import Cookies from 'universal-cookie';
//= Translations
import en from './locales/en.json';
import ar from './locales/ar.json';

export default async function getDictionary() {
  const pathname = headers().get('x-pathname') || "";
  const cookie = headers().get('cookie');
  const cookies = new Cookies(cookie, { path: '/' });
  let locale = cookies.get('gridsapps-locale');

  if (!locale) {
    const navigationLocale = pathname.split('/')[1];
    let handledLocale = navigationLocale || 'en';
    cookies.set('gridsapps-locale', handledLocale, { path: '/' });
    locale = handledLocale;
  }

  const translations = (locale || 'en') === 'ar' ? ar : en;
  return { translations, locale };
}
