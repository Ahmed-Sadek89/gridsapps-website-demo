'use client'
import React, { useEffect, useState } from 'react'
//= Components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
//= I18n
import useDictionary from '@/dictionaries/clientDictionary'
//= Types
import type { ITopic_field, SectionsResponse } from '@/types'
//= Styles
import clsx from 'clsx'
import cls from './styles.module.scss'
import {
  generateItemsSectionData,
  generateMainSectionData
} from '@/components/Service/get_section_data'

type Props = {
  whiteBackground?: boolean
  data: SectionsResponse | undefined
  sec11_testimonial_main?: ITopic_field[] | undefined
  sec11_testimonial?: ITopic_field[] | undefined
}

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 2000,
  style: {
    padding: '20px'
  }
}

export default function Testimonials ({
  data,
  whiteBackground,
  sec11_testimonial_main,
  sec11_testimonial
}: Props) {
  const [isClient, setIsClient] = useState(false)
  const { translations: dictionary, locale } = useDictionary()
  const translations = dictionary.common.testimonials

  useEffect(() => {
    setIsClient(true)
  }, [])
  const mainData = generateMainSectionData(sec11_testimonial_main)
  const itemsSectionData = generateItemsSectionData(sec11_testimonial)
  const slides = itemsSectionData?.map((topic, index) => ({
    id: index,
    logo: topic.image
      ? `https://gridsapps.xyz/dash/uploads/topics/${topic.image}`
      : '/imgs/testimonials/logo.png',
    user: {
      name: topic.title,
      position: topic.job
    },
    content: topic.description
  })) || [
    {
      id: 1,
      logo: '/imgs/testimonials/logo.png',
      user: {
        name: 'Larry Pageim Fred & Sergey Brin',
        position: translations.position
      },
      content: translations.lorem
    },
    {
      id: 12,
      logo: '/imgs/testimonials/logo.png',
      user: {
        name: 'Ahmed Sadek',
        position: translations.position
      },
      content: translations.lorem
    },
    {
      id: 2,
      logo: '/imgs/testimonials/logo.png',
      user: {
        name: 'Hassan Ali',
        position: translations.position
      },
      content: translations.lorem
    },
    {
      id: 3,
      logo: '/imgs/testimonials/logo.png',
      user: {
        name: 'Nader Hantash',
        position: translations.position
      },
      content: translations.lorem
    },
    {
      id: 4,
      logo: '/imgs/testimonials/logo.png',
      user: {
        name: 'Ahmad Eid',
        position: translations.position
      },
      content: translations.lorem
    }
  ]

  return (
    <section
      className={clsx(cls.testimonials, { [cls.white]: whiteBackground })}
    >
      <div className='container'>
        <div className={cls.meta}>
          <h2>{mainData.title}</h2>
          <p>{mainData.description}</p>
        </div>
        <div className={cls.testimonials_swiper}>
          {isClient ? (
            <Swiper {...swiperOptions} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={cls.testimonial}>
                    <div className={cls.image}>
                      <img
                        loading='lazy'
                        src={slide.logo}
                        alt={slide.user.name}
                      />
                    </div>
                    <div className={cls.content}>
                      {/* <p dangerouslySetInnerHTML={{ __html: slide.content }} /> */}
                      <p>{slide.content}</p>
                    </div>
                    <div className={cls.user}>
                      <h4>{slide.user.name}</h4>
                      <p>{slide.user.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  )
}
