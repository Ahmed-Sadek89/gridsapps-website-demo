'use client';
import React from 'react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: SectionResponse | undefined
}

export default function TermsWrapper({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.terms.content;

  function changeCategoryFilter(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    document.querySelectorAll(`.${cls.filter}`).forEach(el => el.classList.remove(cls.active));
    event.currentTarget.classList.add(cls.active);
  }

  return (
    <section className={cls.wrapper}>
      {/* <div className={cls.filters}>
        <div className={clsx(cls.filter, cls.active)} onClick={changeCategoryFilter}>
          <button>{translations.buttons}</button>
        </div>
        <div className={cls.filter} onClick={changeCategoryFilter}>
          <button>{translations.buttons}</button>
        </div>
        <div className={cls.filter} onClick={changeCategoryFilter}>
          <button>{translations.buttons}</button>
        </div>
        <div className={cls.filter} onClick={changeCategoryFilter}>
          <button>{translations.buttons}</button>
        </div>
        <div className={cls.filter} onClick={changeCategoryFilter}>
          <button>{translations.buttons}</button>
        </div>
      </div> */}
      <div className="container">
        <div className={cls.content}>
          <p dangerouslySetInnerHTML={{ __html: data?.topic?.[0].details || '' }} />
        </div>
      </div>
    </section>
  )
}
