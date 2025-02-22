'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

export default function Process({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.process;

  const steps = data?.topics?.map(topic => ({
    id: topic.id,
    image: topic.photo_file || '',
    title: topic.title,
    description: topic.details
  })) || [
      {
        id: 1,
        image: '/imgs/process/process-1.png',
        title: translations.items[0],
        description: translations.lorem
      },
      {
        id: 2,
        image: '/imgs/process/process-2.png',
        title: translations.items[1],
        description: translations.lorem
      },
      {
        id: 3,
        image: '/imgs/process/process-3.png',
        title: translations.items[2],
        description: translations.lorem
      },
      {
        id: 4,
        image: '/imgs/process/process-4.png',
        title: translations.items[3],
        description: translations.lorem
      },
      {
        id: 5,
        image: '/imgs/process/process-5.png',
        title: translations.items[4],
        description: translations.lorem
      },
      {
        id: 6,
        image: '/imgs/process/process-6.png',
        title: translations.items[5],
        description: translations.lorem
      }
    ];

  return (
    <section className={cls.process}>
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.meta}>
            <h2>{translations.title}</h2>
            <p>{translations.sub_title}</p>
          </div>
          <div className={cls.steps}>
            {
              steps.map((step, index) => (
                <div className={cls.step} key={index}>
                  <div className={cls.image}>
                    <img loading='lazy' src={step.image} alt={step.title} />
                  </div>
                  <div className={cls.content}>
                    <h4>{step.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: step.description }} />
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
