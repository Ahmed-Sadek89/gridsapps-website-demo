'use client';
import React from 'react';
import Link from 'next/link';
//= Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
//= Utils
import { dateFormatter } from '@/utils/formatters';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { ITopic } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: ITopic[] | undefined;
}

export default function Blog({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.blogs;

  const blogs = data?.slice(0, 3).map(topic => ({
    id: topic.id,
    title: topic.title,
    date: topic.date,
    description: topic.details
  })) || [
      {
        id: 1,
        title: translations.blog.title,
        date: '07-22-2024',
        description: translations.blog.description
      },
      {
        id: 2,
        title: translations.blog.title,
        date: '10-17-2024',
        description: translations.blog.description
      },
      {
        id: 3,
        title: translations.blog.title,
        date: '08-06-2024',
        description: translations.blog.description
      }
    ];

  return (
    <section className={cls.blogs}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={cls.blog_swiper}>
          {
            blogs.map((blog, index) => (
              <div className={cls.blog} key={index}>
                <div className={cls.top}>
                  <span className={cls.color} />
                  <span className={cls.date}>
                    <Icon icon='lets-icons:time-duotone-line' />
                    {dateFormatter({ date: blog.date, format: 'EEE, dd LLL yyy' })}
                  </span>
                </div>
                <div className={clsx(cls.content, { [cls.rtl]: locale === 'ar' })}>
                  <h3>
                    <Link href={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <div className={cls.content_wrapper}>
                    <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                    <Link href={`/blog/${blog.id}`}>
                      <button>
                        <Icon icon={locale === 'ar' ? 'line-md:arrow-left' : 'line-md:arrow-right'} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
