'use client';
import React from 'react';
//= Components
import Post from '../Post';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { ITopic } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: ITopic[] | undefined;
}

function PostsList({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.blogs;

  const blogs = data?.map(topic => ({
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
      },
      {
        id: 4,
        title: translations.blog.title,
        date: '07-22-2024',
        description: translations.blog.description
      },
      {
        id: 5,
        title: translations.blog.title,
        date: '10-17-2024',
        description: translations.blog.description
      },
      {
        id: 6,
        title: translations.blog.title,
        date: '08-06-2024',
        description: translations.blog.description
      },
      {
        id: 7,
        title: translations.blog.title,
        date: '07-22-2024',
        description: translations.blog.description
      },
      {
        id: 8,
        title: translations.blog.title,
        date: '10-17-2024',
        description: translations.blog.description
      },
      {
        id: 9,
        title: translations.blog.title,
        date: '08-06-2024',
        description: translations.blog.description
      }
    ];

  return (
    <div className={cls.posts_list}>
      {
        blogs.map((blog, index) => (
          <Post blog={blog} key={index} />
        ))
      }
    </div>
  )
}

export default PostsList