'use client';
//= Types
import type { ITopic } from '@/types';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './details.module.scss';

type Props = {
  data: ITopic | undefined;
}

export default function Details({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.about.details;

  return (
    <div className="container">
      <div className={cls.details}>
        <span>{translations.sub_title}</span>
        <h2>{data?.title}</h2>
        <p>{data?.details}</p>
      </div>
    </div>
  )
}