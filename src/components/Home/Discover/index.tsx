'use client';
import React from 'react'
import Link from 'next/link';
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

export default function Discover({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.discover;

  const solutions = data?.topics?.map(topic => ({
    id: topic.id,
    icon: topic.photo_file || '',
    title: topic.title
  })) || [
      {
        id: 1,
        icon: 'carbon:application-mobile',
        title: translations.solutions[0],
      },
      {
        id: 2,
        icon: 'carbon:application-web',
        title: translations.solutions[1],
      },
      {
        id: 3,
        icon: 'carbon:cloud-app',
        title: translations.solutions[2],
      },
      {
        id: 4,
        icon: 'healthicons:desktop-app-outline',
        title: translations.solutions[3],
      }
    ];

  return (
    <section className={cls.discover}>
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.meta}>
            <h2>{translations.title}</h2>
            <p>{translations.sub_title}</p>
            <button>
              <Link href="/contact">
                {translations.button}
              </Link>
            </button>
          </div>
          <div className={cls.solutions}>
            {
              solutions.map((solution, index) => (
                <div className={cls.solution} key={index}>
                  <div className={cls.icon}>
                    {/* <Icon icon={solution.icon} /> */}
                    <img src={solution.icon} alt="solution icon" />
                  </div>
                  <div className={cls.content}>
                    <p>{solution.title}</p>
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
