'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

export default function Activities({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.activities;

  const activities = data?.topics?.map(topic => ({
    id: topic.id,
    image: topic.photo_file || '',
    title: topic.title,
    description: topic.details
  })) || [
      {
        id: 1,
        image: '/imgs/activites/activity-1.svg',
        title: translations.items[0],
        description: translations.lorem
      },
      {
        id: 2,
        image: '/imgs/activites/activity-2.svg',
        title: translations.items[1],
        description: translations.lorem
      },
      {
        id: 3,
        image: '/imgs/activites/activity-3.svg',
        title: translations.items[2],
        description: translations.lorem
      },
      {
        id: 4,
        image: '/imgs/activites/activity-4.svg',
        title: translations.items[3],
        description: translations.lorem
      },
      {
        id: 5,
        image: '/imgs/activites/activity-5.svg',
        title: translations.items[4],
        description: translations.lorem
      },
      {
        id: 6,
        image: '/imgs/activites/activity-6.svg',
        title: translations.items[5],
        description: translations.lorem
      },
      {
        id: 7,
        image: '/imgs/activites/activity-7.svg',
        title: translations.items[6],
        description: translations.lorem
      },
      {
        id: 8,
        image: '/imgs/activites/activity-8.svg',
        title: translations.items[7],
        description: translations.lorem
      }
    ];

  return (
    <section className={cls.activities}>
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.meta}>
            <h2>{translations.title}</h2>
            <p>{translations.sub_title}</p>
          </div>
          <div className={cls.activities_wrapper}>
            {
              activities.map((activity, index) => (
                <div className={cls.activity} key={index}>
                  <div className={cls.image}>
                    <img loading='lazy' src={activity.image} alt={activity.title} />
                  </div>
                  <div className={cls.content}>
                    <h4>{activity.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: activity.description }} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
