'use client';
import React from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
//= Utils
import { dateFormatter } from '@/utils/formatters';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  blog: {
    id: number;
    title: string;
    date: string;
    description: string;
  }
}

function Post({ blog }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.blogs;

  return (
    <div className={cls.blog}>
      <div className={cls.top}>
        <span className={cls.color} />
        <span className={cls.date}>
          <Icon icon='lets-icons:time-duotone-line' />
          {dateFormatter({ date: blog.date, format: 'EEE, dd LLL yyy' })}
        </span>
      </div>
      <div className={clsx(cls.content, { [cls.rtl]: locale === 'ar' })}>
        <Link href="/blog/1">
          <h3>{blog.title}</h3>
        </Link>
        <div className={cls.content_wrapper}>
          <p dangerouslySetInnerHTML={{ __html: blog.description }} />
          <Link href="/blog/1">
            <button>
              <Icon icon={locale === 'ar' ? 'line-md:arrow-left' : 'line-md:arrow-right'} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post