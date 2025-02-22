"use client"
import { Icon } from '@iconify/react'
import cls from './features.module.scss'
import { ITopic_field } from '@/types'
import { generateMainSectionData } from '../get_section_data'
import Image from 'next/image'

type Props = {
  sec5_main: ITopic_field[] | undefined
  sec5_main_button: ITopic_field[] | undefined
  sec6_main: ITopic_field[] | undefined
  sec6_main_line: ITopic_field[] | undefined
}

export default function Features3 ({
  sec5_main,
  sec5_main_button,
  sec6_main,
  sec6_main_line
}: Props) {
  const mainSection5 = generateMainSectionData(sec5_main)
  const mainSection6 = generateMainSectionData(sec6_main)
  return (
    <div className={cls.features}>
      <div className='container'>
        <div className={cls.head}>
          <h2>{mainSection5.title}</h2>
          <p>{mainSection5.description}</p>
          <div className={cls.items}>
            {sec5_main_button ? (
              sec5_main_button.map((btn, index) => (
                <p key={index}>{btn.value}</p>
              ))
            ) : (
              <p>Not found</p>
            )}
          </div>
        </div>
        <div className={cls.content}>
          <div className={cls.imageSide}>
            <Image
              src={
                mainSection6.image
                  ? `https://gridsapps.xyz/dash/uploads/topics/${mainSection6.image}`
                  : '/imgs/services/dashboard.svg'
              }
              alt={mainSection6.title}
              width={400}
              height={400}
            />
          </div>
          <div className={cls.textSide}>
            <h3>{mainSection6.title}</h3>
            <p>{mainSection6.description}</p>
            <ul>
              {sec6_main_line ? (
                sec6_main_line.map((btn, index) => (
                  <li key={index}>
                    <Icon icon='icon-park-solid:correct' /> {btn.value}
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
      </div>
    </div>
  )
}
