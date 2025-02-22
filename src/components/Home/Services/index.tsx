'use client';
import React from 'react'
import Link from 'next/link';
//= Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: '.services_swiper_next',
    prevEl: '.services_swiper_prev',
  },
  breakpoints: {
    1650: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }
}

export default function Services({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.services;

  const slides = data?.topics?.map(topic => ({
    id: topic.id,
    image: topic.photo_file || '',
    title: topic.title,
    description: topic.details
  })) || [
      {
        id: 1,
        image: '/imgs/services/service-2.png',
        title: 'Ecommerce Apps',
        description: translations.service.lorem
      },
      {
        id: 2,
        image: '/imgs/services/service-3.png',
        title: 'Website Design',
        description: translations.service.lorem
      },
      {
        id: 3,
        image: '/imgs/services/service-2.png',
        title: 'Mobile Apps',
        description: translations.service.lorem
      },
      {
        id: 4,
        image: '/imgs/services/service-4.png',
        title: 'Tripple Stock',
        description: translations.service.lorem
      },
      {
        id: 1,
        image: '/imgs/services/service-2.png',
        title: 'Ecommerce Apps',
        description: translations.service.lorem
      },
      {
        id: 2,
        image: '/imgs/services/service-3.png',
        title: 'Website Design',
        description: translations.service.lorem
      },
      {
        id: 3,
        image: '/imgs/services/service-2.png',
        title: 'Mobile Apps',
        description: translations.service.lorem
      },
      {
        id: 4,
        image: '/imgs/services/service-4.png',
        title: 'Tripple Stock',
        description: translations.service.lorem
      }
    ];

  return (
    <section className={cls.serivces}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={cls.services_swiper}>
          <div className={cls.navigation}>
            <button className={clsx('services_swiper_prev', cls.swiper_prev)}>
              <Icon icon={locale === 'ar' ? 'uil:angle-right' : 'uil:angle-left'} />
            </button>
            <button className={clsx('services_swiper_next', cls.swiper_next)}>
              <Icon icon={locale === 'ar' ? 'uil:angle-left' : 'uil:angle-right'} />
            </button>
          </div>
          <Swiper {...swiperOptions} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={cls.swiper}>
            {
              slides.map((slide, index) => (
                <SwiperSlide key={index} className={cls.slide}>
                  <div className={cls.service}>
                    <div className={cls.image}>
                      <img loading='lazy' src={slide.image} alt={slide.title} />
                    </div>
                    <div className={cls.content}>
                      <h3>{slide.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: slide.description }} />
                    </div>
                    <button>
                      <Link href={`/services/${slide.id}`}>
                        {translations.service.readMore}
                      </Link>
                    </button>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}
