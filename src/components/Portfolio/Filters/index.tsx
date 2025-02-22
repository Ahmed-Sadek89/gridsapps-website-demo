'use client';
import React, { useState } from 'react';
//= Components
import Input from '@/components/UIs/Input';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import clsx from 'clsx';
import cls from './filters.module.scss';

type Props = {
  filter: string;
  setFilter: (value: string) => void;
}

export default function Filters({ filter, setFilter }: Props) {
  const [searchText, setSearchText] = useState('');
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.portfolio.content;

  return (
    <div className={cls.filters}>
      <div className={clsx(cls.search, cls.field)}>
        <Input
        style={{borderRadius: '30px'}}
          name="search"
          type="search"
          placeholder={translations.searchInput}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          icon='circum:search'
        />
      </div>
      <div className={cls.filters}>
        <div className={clsx(cls.filter, filter === 'website' && cls.active)} onClick={() => setFilter('website')}>
          <button>{translations.filters[0]}</button>
        </div>
        <div className={clsx(cls.filter, filter === 'mobile' && cls.active)} onClick={() => setFilter('mobile')}>
          <button>{translations.filters[1]}</button>
        </div>
        <div className={clsx(cls.filter, filter === 'desktop' && cls.active)} onClick={() => setFilter('desktop')}>
          <button>{translations.filters[2]}</button>
        </div>
        <div className={clsx(cls.filter, filter === 'social' && cls.active)} onClick={() => setFilter('social')}>
          <button>{translations.filters[3]}</button>
        </div>
      </div>
    </div>
  )
}