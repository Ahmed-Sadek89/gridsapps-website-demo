'use client';
import React, { useEffect, useState } from 'react';
//= Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  speed: 1500,
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
}

function ClientsTestimonials({ data }: Props) {
  const [isClient, setIsClient] = useState(false);
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.testimonials.testimonials;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = data?.topics?.map(topic => ({
    id: topic.id,
    user: {
      image: topic.photo_file,
      name: topic.title,
      location: 'Worldwide'
    },
    content: topic.details,
    rate: topic.fields[1].value
  })) || [
      {
        id: 1,
        user: {
          image: '/imgs/testimonials/user1.png',
          name: 'Viezh Robert',
          location: "Warsaw, Poland"
        },
        content: translations.lorem,
        rate: 4.5
      },
      {
        id: 2,
        user: {
          image: '/imgs/testimonials/user3.png',
          name: 'Hassan Ali',
          location: "Sohag, Egypt"
        },
        content: translations.lorem,
        rate: 4.5
      },
      {
        id: 3,
        user: {
          image: '/imgs/testimonials/user2.png',
          name: 'Eman Ahmad',
          location: "Ramallah, Palestine"
        },
        content: translations.lorem,
        rate: 4.5
      },
      {
        id: 4,
        user: {
          image: '/imgs/testimonials/user1.png',
          name: 'Ahmad Eid',
          location: "Sohag, Egypt"
        },
        content: translations.lorem,
        rate: 4.5
      }
    ];

  return (
    <section className={cls.clients_testimonials}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.description}</p>
        </div>
        <div className={cls.testimonials_swiper}>
          {
            isClient ?
              <Swiper {...swiperOptions} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {
                  slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className={cls.testimonial}>
                        <div className={cls.top}>
                          <div className={cls.left}>
                            <div className={cls.image}>
                              <img loading='lazy' src={slide.user.image || ''} alt={slide.user.name} />
                            </div>
                            <div className={cls.user}>
                              <h4>{slide.user.name}</h4>
                              <p>{slide.user.location}</p>
                            </div>
                          </div>
                          <div className={cls.right}>
                            <p>{slide.rate} <Icon icon='twemoji:star' /></p>
                          </div>
                        </div>
                        <div className={cls.content}>
                          <p dangerouslySetInnerHTML={{ __html: slide.content }} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              :
              null
          }
        </div>
      </div>
    </section>
  )
}

export default ClientsTestimonials