'use client'
import { Icon } from '@iconify/react'
import cls from './video.module.scss'
import { ITopic_field } from '@/types'
import { generateMainSectionData } from '../get_section_data'
import Image from 'next/image'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

type Props = {
  sec7_main: ITopic_field[] | undefined
  sec8_main: ITopic_field[] | undefined
  sec8_main_line: ITopic_field[] | undefined
}

export default function Video ({ sec7_main, sec8_main, sec8_main_line }: Props) {
  const mainSection7 = generateMainSectionData(sec7_main)
  const mainSection8 = generateMainSectionData(sec8_main)
   const [isOpen, setOpen] = useState(false)
   console.log({mainSection8})
  return (
    <>
      <div className='container'>
        <div className={cls.header}>
          <h2>{mainSection7.title}</h2>
          <p>{mainSection7.description}</p>
        </div>
        <div className={cls.video}>
          <div className={cls.textSide}>
            <div className={cls.box}>
              <h3>{mainSection8.title}</h3>
              <ul>
                {sec8_main_line ? (
                  sec8_main_line.map((line, index) => (
                    <li key={index}>
                      <Icon icon='icon-park-solid:correct' /> {line.value}
                    </li>
                  ))
                ) : (
                  <li>
                    <Icon icon='icon-park-solid:correct' /> Not found
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className={cls.videoSide}>
            <Image
              src={
                mainSection8.image
                  ? `https://gridsapps.xyz/dash/uploads/topics/${mainSection8.image}`
                  : '/imgs/services/video.png'
              }
              alt={mainSection8.title}
              width={400}
              height={400}
            />
            <Icon icon='lets-icons:video-fill' onClick={() => setOpen(true)}/>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={mainSection8.video.split("v=")[1]?.split("&")[0] || 'L61p2uyiMSo'}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
