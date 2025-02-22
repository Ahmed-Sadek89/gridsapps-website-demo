'use client';
//= Types
import { ITopic } from '@/types';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './process.module.scss';

type Props = {
  data: ITopic[];
}

export default function Process({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.about.process;

  console.log(data)

  return (
    <div className={cls.process}>
      <h2>{translations.title}</h2>
      <p>{translations.sub_title}</p>
      <div className={cls.stagesOne}>
        {data?.slice(0, 3).map(item => (
          <div className={cls.stage} key={item?.id}>
            <div className={cls.vrLine}></div>
            <h3>{item?.title}</h3>
            <p>{item?.details.length > 180 ? item?.details.substring(0, 180) + '...' : item?.details}</p>
          </div>
        ))}
      </div>
      <div className={cls.line}></div>
      <div className={cls.stagesTwo}>
        {data?.slice(3, 6).map(item => (
          <div className={cls.stage} key={item?.id}>
            <div className={cls.vrLine}></div>
            <h3>{item?.title}</h3>
            <p>{item?.details.length > 150 ? item?.details.substring(0, 180) + '...' : item?.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}