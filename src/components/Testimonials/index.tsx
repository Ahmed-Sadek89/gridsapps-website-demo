import React from 'react'
//= Components
import Testimonials from '../Home/Testimonials';
import ClientsTestimonials from './ClientsTestimonials';
import Video from '../Home/Video';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
  video: SectionsResponse | undefined;
}

export default function TestimonialsWrapper({ data, video }: Props) {
  return (
    <section className={cls.testimonials}>
      <Testimonials data={data} whiteBackground />
      <ClientsTestimonials data={data} />
      <Video data={{ platforms: undefined, video }} withoutNumbers />
    </section>
  )
}
