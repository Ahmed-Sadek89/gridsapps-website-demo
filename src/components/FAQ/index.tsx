import React from 'react'
//= Components
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import Video from '../Home/Video';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: {
    faqs: SectionsResponse | undefined;
    video: SectionsResponse | undefined;
  };
}

export default function FAQWrapper({ data: { faqs, video } }: Props) {
  return (
    <section className={cls.faq}>
      <FrequentlyAskedQuestions data={faqs} />
      <Video withoutNumbers data={{ platforms: undefined, video }} />
    </section>
  )
}
