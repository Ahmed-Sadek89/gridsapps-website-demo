'use client';
import React from 'react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionResponse | undefined
}

export default function PrivacyPolicyWrapper({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.privacy.content;

  return (
    <section className={cls.wrapper}>
      <div className="container">
        <div className={cls.content}>
          <p dangerouslySetInnerHTML={{ __html: data?.topic?.[0].details || '' }} />
        </div>
      </div>
    </section>
  )
}
