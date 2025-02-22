'use client'
import cls from './details.module.scss'
import { ITopic_field } from '@/types'
import { generateMainSectionData } from '../get_section_data'
import Image from 'next/image'

type Props = { sec9_main: ITopic_field[] | undefined }

export default function Details2 ({ sec9_main }: Props) {
  const mainData = generateMainSectionData(sec9_main)

  return (
    <div className={cls.details}>
      <div className='container'>
        <div className={cls.content}>
          <div className={cls.textSide}>
            <h2>{mainData.title}</h2>
            <p>{mainData.description}</p>
          </div>
          <div className={cls.imageSide}>
            <Image
              src={
                mainData.image
                  ? `https://gridsapps.xyz/dash/uploads/topics/${mainData.image}`
                  : '/imgs/services/statistics.png'
              }
              alt={mainData.title}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
