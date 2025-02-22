'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  listCount?: number;
  data: SectionsResponse | undefined;
}

export default function Team({ data, listCount }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.team;

  const teamMembers = data?.topics?.map(topic => ({
    id: topic.id,
    image: topic.photo_file || '',
    name: topic.title,
    position: topic.fields[0].value
  })) || [
      {
        id: 1,
        image: '/imgs/team/team-1.jpg',
        name: 'Hassan Ali',
        position: translations.positions.front
      },
      {
        id: 2,
        image: '/imgs/team/team-2.jpg',
        name: 'Ahmed Kholy',
        position: translations.positions.back
      },
      {
        id: 3,
        image: '/imgs/team/team-3.jpg',
        name: 'Ahmad Eid',
        position: translations.positions.front
      },
      {
        id: 4,
        image: '/imgs/team/team-4.jpg',
        name: 'Mahmoud AbdelMageed',
        position: translations.positions.mobile
      },
      {
        id: 5,
        image: '/imgs/team/team-1.jpg',
        name: 'Hassan Ali',
        position: translations.positions.front
      },
      {
        id: 6,
        image: '/imgs/team/team-2.jpg',
        name: 'Ahmed Kholy',
        position: translations.positions.back
      },
      {
        id: 7,
        image: '/imgs/team/team-3.jpg',
        name: 'Ahmad Eid',
        position: translations.positions.front
      },
      {
        id: 8,
        image: '/imgs/team/team-4.jpg',
        name: 'Mahmoud AbdelMageed',
        position: translations.positions.mobile
      },
      {
        id: 9,
        image: '/imgs/team/team-1.jpg',
        name: 'Hassan Ali',
        position: translations.positions.front
      },
      {
        id: 10,
        image: '/imgs/team/team-2.jpg',
        name: 'Ahmed Kholy',
        position: translations.positions.back
      },
      {
        id: 11,
        image: '/imgs/team/team-3.jpg',
        name: 'Ahmad Eid',
        position: translations.positions.front
      },
      {
        id: 12,
        image: '/imgs/team/team-4.jpg',
        name: 'Mahmoud AbdelMageed',
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
          {
            teamMembers.map((member, index) => (
              <div className={cls.member} key={index}>
                <div className={cls.image}>
                  <img loading='lazy' src={member.image} alt={member.name} />
                </div>
                <div className={cls.content}>
                  <p>{member.position}</p>
                  <h3>{member.name}</h3>
                </div>
                <div className={cls.socials}>
                  <a href="#">
                    <Icon icon='hugeicons:linkedin-01' />
                  </a>
                  <a href="#">
                    <Icon icon='hugeicons:github-01' />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
