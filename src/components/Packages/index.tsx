'use client';
import React from 'react';
//= Components
import Form from './Form';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

export default function PackagesWrapper({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.packages;

  const packages = data?.topics?.map(topic => ({
    id: topic.id,
    title: topic.title,
    price: Number(topic.fields.find(field => field.title === 'Price')?.value || 0), // Ensure price is a number
    duration: 1,
    off: 0,
    fields: topic.fields.map(field => ({
      title: field.title,
      value: Number(field.value)
    }))
  })) || [
    {
      id: 1,
      title: "Package #1",
      price: 35,
      duration: 1,
      off: 0,
      fields: [
        {
          title: 'Price',
          value: 35
        }
      ]
    },
    {
      id: 2,
      title: "Package #2",
      price: 55,
      duration: 2,
      off: 21,
      fields: [
        {
          title: 'Price',
          value: 55
        }
      ]
    },
    {
      id: 3,
      title: "Package #3",
      price: 75,
      duration: 3,
      off: 29,
      fields: [
        {
          title: 'Price',
          value: 75
        }
      ]
    },
    {
      id: 4,
      title: "Package #4",
      price: 99,
      duration: 2,
      off: 21,
      fields: [
        {
          title: 'Price',
          value: 99
        }
      ]
    }
  ];
  

  return (
    <section className={cls.wrapper}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.content.title}</h2>
          <p>{translations.content.description}</p>
        </div>
      </div>
      <Form packages={packages} />
    </section>
  )
}
