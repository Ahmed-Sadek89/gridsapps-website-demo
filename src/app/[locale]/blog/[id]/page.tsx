import React from 'react';
//= Components
import Navbar from '@/components/Common/Navbar';
import BlogDetailsWrapper from '@/components/Blogs/Details';
import Footer from '@/components/Common/Footer';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getBlogById, getBlogs } from '@/api/sections';
import { getContactData, getSocialLinks } from '@/api/home';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${'Article title'}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

type Props = {
  params: {
    id: string;
  };
}

export default async function BlogDetailsPage({ params: { id } }: Props) {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.blog.header;
  const [blog_details, related_blogs, socials, contactData] = await Promise.all([
    asyncHandler(async () => await getBlogById(id, locale)),
    asyncHandler(async () => await getBlogs(locale)),
    asyncHandler(getSocialLinks),
    asyncHandler(async () => await getContactData(locale)),
  ]);

  return (
    <>
      <Navbar />
      <BlogDetailsWrapper data={{ blog: blog_details, related_blogs }} />
      <Footer data={{ socials, contactData }} />
    </>
  )
}
