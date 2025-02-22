'use client'
import useDictionary from '@/dictionaries/clientDictionary'
import cls from './details.module.scss'
import clsx from 'clsx'
import { ITopic_field } from '@/types'
import { generateMainSectionData } from '../get_section_data'
import Image from 'next/image'

type Props = {
  sec3_main: ITopic_field[] | undefined
}

export default function Details ({ sec3_main }: Props) {
  const { locale } = useDictionary()
  const mainData = generateMainSectionData(sec3_main)
  return (
    <div className={cls.details}>
      <div className='container'>
        <div className={cls.content}>
          <div className={cls.textSide}>
            <h2>{mainData.title}</h2>
            <p>{mainData.description}</p>
          </div>
          {mainData.image ? (
            <div className={cls.imagesSide}>
            <Image
              src={`https://gridsapps.xyz/dash/uploads/topics/${mainData.image}`}
              alt={mainData.title}
              width={500}
              height={500}
              style={{objectFit: "contain", width: "auto"}}
            />
            </div>
          ) : (
            <div className={cls.imagesSide}>
              <div className={clsx(cls.floating, cls[locale])}>
                <img src='/imgs/decorations/dark_dots.svg' alt='dots' />
                <img src='/imgs/decorations/vector_line.svg' alt='dots' />
                <img src='/imgs/decorations/rectangle.svg' alt='dots' />
              </div>
              <div className={cls.partOne}>
                <img src='/imgs/decorations/likes.svg' alt='dots' />
                <img src='/imgs/decorations/stats.svg' alt='dots' />
              </div>
              <div className={cls.partTwo}>
                <img src='/imgs/decorations/followers.svg' alt='dots' />
                <img src='/imgs/decorations/reach.svg' alt='dots' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
