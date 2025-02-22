'use client';
import React from 'react'
//= Components
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './styles.module.scss';
import clsx from 'clsx';
import { Topic } from '@/api/web_projects/types';
import Image from 'next/image';

type Props = {
  projects: Topic[] | undefined
}

export default function Projects({projects }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.projects;

  // const projects = [
  //   '/imgs/projects/project-1.png',
  //   '/imgs/projects/project-2.png',
  //   '/imgs/projects/project-3.png',
  //   '/imgs/projects/project-4.png',
  //   '/imgs/projects/project-5.png',
  //   '/imgs/projects/project-6.png',
  //   '/imgs/projects/project-7.png',
  //   '/imgs/projects/project-8.png'
  // ];

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
    <section className={cls.projects}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={clsx(cls.projects_swiper, { [cls.rtl]: locale === 'ar' })}>
          <div className={cls.slider_1}>
            <div className={cls.first_row} onMouseOver={() => handleMouseOver(true)} onMouseLeave={() => handleMouseLeave(true)}>
              {
                projects?.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <Image width={400} height={400} loading='lazy' src={slide.photo_file} alt={slide.title} />
                  </div>
                ))
              }
            </div>
            <div className={cls.first_row} onMouseOver={() => handleMouseOver(true)} onMouseLeave={() => handleMouseLeave(true)}>
              {
                projects?.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <Image width={400} height={400} loading='lazy' src={slide.photo_file} alt={slide.title} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className={cls.slider_2}>
            <div className={cls.second_row} onMouseOver={() => handleMouseOver(false)} onMouseLeave={() => handleMouseLeave(false)}>
              {
                projects?.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <Image width={400} height={400} loading='lazy' src={slide.photo_file} alt={slide.title} />
                  </div>
                ))
              }
            </div>
            <div className={cls.second_row} onMouseOver={() => handleMouseOver(false)} onMouseLeave={() => handleMouseLeave(false)}>
              {
                projects?.map((slide, index) => (
                  <div className={cls.project} key={index} title={slide.title}>
                    <Image width={400} height={400} loading='lazy' src={slide.photo_file} alt={slide.title} />
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
