'use client';
import React from 'react'
//= Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  listCount?: number;
  data: SectionsResponse | undefined;
}

const swiperOptions = {
  slidesPerView: 4,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
}

export default function Team({ data, listCount }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.team;

  const teamMembers = data?.topics?.map(topic => ({
    id: topic.id,
    image: topic.photo_file || '',
    name: topic.title,
    linkedin: topic.fields[1]?.value,
    position: topic.fields[0].value
  })) || [
      {
        id: 1,
        image: '/imgs/team/team-1.jpg',
        name: 'Hassan Ali',
        linkedin: '#',
        position: translations.positions.front
      },
      {
        id: 2,
        image: '/imgs/team/team-2.jpg',
        name: 'Ahmed Kholy',
        linkedin: '#',
        position: translations.positions.back
      },
      {
        id: 3,
        image: '/imgs/team/team-3.jpg',
        name: 'Ahmad Eid',
        linkedin: '#',
        position: translations.positions.front
      },
      {
        id: 4,
        image: '/imgs/team/team-4.jpg',
        name: 'Mahmoud AbdelMageed',
        linkedin: '#',
        position: translations.positions.mobile
      },
      {
        id: 5,
        image: '/imgs/team/team-1.jpg',
        name: 'Hassan Ali',
        linkedin: '#',
        position: translations.positions.front
      },
      {
        id: 6,
        image: '/imgs/team/team-2.jpg',
        name: 'Ahmed Kholy',
        linkedin: '#',
        position: translations.positions.back
      },
      {
        id: 7,
        image: '/imgs/team/team-3.jpg',
        name: 'Ahmad Eid',
        linkedin: '#',
        position: translations.positions.front
      },
      {
        id: 8,
        image: '/imgs/team/team-4.jpg',
        name: 'Mahmoud AbdelMageed',
        linkedin: '#',
        position: translations.positions.mobile
      }
    ];

  return (
    <section className={cls.team}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={cls.team_swiper}>
          <Swiper {...swiperOptions} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {
              teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className={cls.member}>
                    <div className={cls.image}>
                      <img loading='lazy' src={member.image} alt={member.name} />
                    </div>
                    <div className={cls.content}>
                      <p>{member.position}</p>
                      <h3>{member.name}</h3>
                    </div>
                    <div className={cls.socials}>
                      <a href={member.linkedin || '#'}>
                        <Icon icon='hugeicons:linkedin-01' />
                      </a>
                      <a href="#">
                        <Icon icon='hugeicons:github-01' />
                      </a>
                    </div>
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
