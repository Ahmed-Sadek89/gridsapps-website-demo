'use client';
import React, { useState } from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
import RelatedPostsList from './RelatedPosts';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { ITopic, SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: {
    blog: ITopic | undefined,
    related_blogs: SectionsResponse | undefined
  };
}

function BlogsDetailsWrapper({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.blog.content;
  console.log(data);

  return (
    <div className={cls.blog_details}>
      <div className="container">
        <div className={cls.meta}>
          <div className={cls.author}>
            <div className={cls.img}>
              <img loading='lazy' src="/imgs/logos/logo-icon.svg" alt="" />
            </div>
            <div className={cls.info}>
              <p>{data?.blog?.user.name}</p>
              <p>{data?.blog?.date}</p>
            </div>
          </div>
          <h1>{data?.blog?.title}</h1>
          <p className={cls.text}>
            <Icon icon='iconamoon:category' />
            {'Category'}
          </p>
        </div>
        <div className={cls.image}>
          <img loading='lazy' src={data?.blog?.photo_file || ''} alt="post image" />
        </div>
        <div className={cls.post}>
          <p dangerouslySetInnerHTML={{ __html: data?.blog?.details || '' }}></p>
        </div>
      </div>
      <RelatedPostsList data={data.related_blogs} currentPostId={data?.blog?.id || 0} />
    </div>
  )
}

export default BlogsDetailsWrapper