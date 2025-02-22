'use client';
import React from 'react'
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

export default function KeepInTouch({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.keep_in_touch;

  const cities = data?.topics?.map(topic => ({
    id: topic.id,
    flag: topic.photo_file || '',
    name: topic.title
  })) || [
      {
        id: 1,
        name: translations.cities[0],
        flag: '/imgs/flags/usa.svg'
      },
      {
        id: 2,
        name: translations.cities[1],
        flag: '/imgs/flags/uae.svg'
      },
      {
        id: 3,
        name: translations.cities[2],
        flag: '/imgs/flags/jordan.svg'
      },
      {
        id: 4,
        name: translations.cities[3],
        flag: '/imgs/flags/palestine.svg'
      },
      {
        id: 5,
        name: translations.cities[4],
        flag: '/imgs/flags/egypt.svg'
      },
      {
        id: 6,
        name: translations.cities[5],
        flag: '/imgs/flags/ksa.svg'
      }
    ];

  return (
    <section className={cls.keep_in_touch}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={cls.wrapper}>
          {
            cities.map((city, index) => (
              <div className={cls.city} key={index}>
                <img loading='lazy' src={city.flag} alt={city.name} />
                <h3 className={locale === 'ar' ? cls.rtl : ''}>{city.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
