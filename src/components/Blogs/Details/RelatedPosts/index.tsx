'use client';
import React from 'react';
//= Components
import Post from '../../List/Post';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
  currentPostId: string | number;
}

function RelatedPostsList({ data, currentPostId }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.blogs;
  const translations_blog_details = dictionary.blog_details;

  const blogs = data?.topics?.filter(post => post.id !== currentPostId).slice(0, 3).map(topic => ({
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
    <div className={cls.blog_details_relatedposts}>
      <div className={cls.meta}>
        <div className="container">
          <h4>{translations_blog_details.related.title}</h4>
          <p>{translations_blog_details.related.description}</p>
        </div>
      </div>
      <div className="container">
        <div className={cls.posts_list}>
          {
            blogs.map((blog, index) => (
              <Post blog={blog} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RelatedPostsList