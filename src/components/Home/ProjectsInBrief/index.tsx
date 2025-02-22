'use client';
import React from 'react'
//= Components
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

export default function ProjectsInBrief({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.projects_in_brief;

  const projects = data?.topics?.map(topic => ({ title: topic.title || '', logo: topic.photo_file || '' })) || [
    { title: '', logo: '/imgs/clients/client-1.png' },
    { title: '', logo: '/imgs/clients/client-2.png' },
    { title: '', logo: '/imgs/clients/client-3.png' },
    { title: '', logo: '/imgs/clients/client-4.png' },
    { title: '', logo: '/imgs/clients/client-1.png' },
    { title: '', logo: '/imgs/clients/client-2.png' },
    { title: '', logo: '/imgs/clients/client-3.png' },
    { title: '', logo: '/imgs/clients/client-4.png' }
  ];

  function handleMouseOver(first_row: boolean) {
    if (first_row) {
      document.querySelectorAll(`.${cls.first_row}`).forEach(el => el.classList.add(cls.pause));
    } else {
      document.querySelectorAll(`.${cls.second_row}`).forEach(el => el.classList.add(cls.pause));
    }
  }

  function handleMouseLeave(first_row: boolean) {
    if (first_row) {
      document.querySelectorAll(`.${cls.first_row}`).forEach(el => el.classList.remove(cls.pause));
    } else {
      document.querySelectorAll(`.${cls.second_row}`).forEach(el => el.classList.remove(cls.pause));
    }
  }

  return (
    <section className={cls.projects_in_brief}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={clsx(cls.projects_swiper, { [cls.rtl]: locale === 'ar' })}>
          <div className={cls.slider_1}>
            <div className={cls.first_row} onMouseOver={() => handleMouseOver(true)} onMouseLeave={() => handleMouseLeave(true)}>
              {
                projects.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <img loading='lazy' src={slide.logo} alt="website" />
                  </div>
                ))
              }
            </div>
            <div className={cls.first_row} onMouseOver={() => handleMouseOver(true)} onMouseLeave={() => handleMouseLeave(true)}>
              {
                projects.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <img loading='lazy' src={slide.logo} alt="website" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className={cls.slider_2}>
            <div className={cls.second_row} onMouseOver={() => handleMouseOver(false)} onMouseLeave={() => handleMouseLeave(false)}>
              {
                projects.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <img loading='lazy' src={slide.logo} alt="website" />
                  </div>
                ))
              }
            </div>
            <div className={cls.second_row} onMouseOver={() => handleMouseOver(false)} onMouseLeave={() => handleMouseLeave(false)}>
              {
                projects.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <img loading='lazy' src={slide.logo} alt="website" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
