'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import ModalVideo from 'react-modal-video'
import useDictionary from '@/dictionaries/clientDictionary'
import type { ITopic_field, SectionsResponse } from '@/types'
import clsx from 'clsx'
import cls from './styles.module.scss'
import { generateMainSectionData } from '@/components/Service/get_section_data'

type Props = {
  withoutNumbers?: boolean
  sec12_why_main?: ITopic_field[] | undefined

  data: {
    platforms: SectionsResponse | undefined
    video: SectionsResponse | undefined
  }
}

export default function Video ({
  withoutNumbers,
  data: { platforms, video },
  sec12_why_main
}: Props) {
  const { translations: dictionary, locale } = useDictionary()
  const translations = dictionary.common.video
  const [isOpen, setOpen] = useState(false)
  const mainData = generateMainSectionData(sec12_why_main)

  const numbers = platforms?.topics?.map(topic => ({
    id: topic.id,
    value: topic.fields[0].value || '',
    title: topic.title
  })) || [
    {
      id: 1,
      value: '90%',
      title: translations.pwa
    },
    {
      id: 2,
      value: '95%',
      title: translations.websites
    },
    {
      id: 3,
      value: '92%',
      title: translations.android
    },
    {
      id: 4,
      value: '85%',
      title: translations.ios
    },
    {
      id: 5,
      value: '89%',
      title: translations.desktop
    }
  ]

  return (
    <>
      <section className={cls.video}>
        <div className='container'>
          <div className={cls.wrapper}>
            <div className={cls.meta}>
              <h2>{mainData.title}</h2>
              <p>{mainData.description}</p>
            </div>
            <div
              className={cls.video_wrapper}
              style={{
                backgroundSize: "contain",
                background: mainData.image
                  ? `url('https://gridsapps.xyz/dash/uploads/topics/${mainData.image}'`
                  : 'url(/imgs/video-section-background.png)'
              }}
            >
              <div className={cls.play} onClick={() => setOpen(true)}>
                <Icon icon='mingcute:play-fill' />
              </div>
            </div>
            {!withoutNumbers ? (
              <div className={cls.numbers}>
                {numbers.map((number, index) => (
                  <div
                    className={clsx(cls.number, locale === 'ar' ? cls.rtl : '')}
                    key={index}
                  >
                    <h4>{number.value}%</h4>
                    <p>{number.title}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* {{mainData.video}} */}
      <ModalVideo
        channel='youtube'
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={video?.topics?.[0]?.video_file || 'L61p2uyiMSo'}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
