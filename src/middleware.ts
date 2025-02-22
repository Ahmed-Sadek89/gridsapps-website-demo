import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
//= Config
import { i18n } from '@/i18n.config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
  const savedLocaleCookie = request.cookies.get('gridsapps-locale');
  const savedLocale = savedLocaleCookie?.value;
  const currentLocale = request.nextUrl.pathname.split('/')[1];
  const token = request.cookies.get('gridsapps-access-token')?.value;

  /***************************** Internationalization ********************************/
  /*
    * No Locales In Current-Url Hanlder (first time or by mistake) *
    ? Redirect user to a url with locale (the cookies-locale if exists or the url-locale)
  */
  if (pathnameIsMissingLocale) {
    const locale = savedLocale || currentLocale || 'en';
    const query = request.nextUrl.search;
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${query ? query : ''}`, request.url));
  }

  /*
    * No Locales Saved In Cookies Hanlder (first time to open the website) *
    ? Save locale to cookies (save url-locale to cookies)
  */
  if (!savedLocale) {
    const handledLocale = (currentLocale && currentLocale !== 'undefined') ? currentLocale : 'en';

    const response = NextResponse.next();
    response.cookies.set({
      name: 'gridsapps-locale',
      value: handledLocale,
      path: '/',
    });

    return response;
  }

  /*
    * Saved Locale In Cookie !== Current-Url Locale Hanlder  *
    ? Redirect user to the correct locale (the cookies one)
  */
  if (savedLocale && currentLocale !== savedLocale) {
    const query = request.nextUrl.search;
    const lang = pathname.split('/')[1];
    const purePathname = pathname.substring(pathname.indexOf(lang) + 3);
    return NextResponse.redirect(new URL(`/${savedLocale}${purePathname.startsWith('/') ? '' : '/'}${purePathname}${query ? query : ''}`, request.url));
  }
  /***********************************************************************************/
  /***********************************************************************************/


  /* 
    * Save pathname to a header (to be used later in the server-dictitionary) 
  */
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  })
}


export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.png|imgs|fonts|css|webfonts|favicon).*)']
}