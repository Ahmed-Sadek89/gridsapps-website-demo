'use client'
import cls from './features.module.scss'
import { ITopic_field } from '@/types'
import {
  generateItemsSectionData,
  generateMainSectionData
} from '../get_section_data'
import Image from 'next/image'

type Props = {
  sec2_main: ITopic_field[] | undefined
  sec2_items: ITopic_field[] | undefined
}

export default function Features ({ sec2_main, sec2_items }: Props) {
  const mainData = generateMainSectionData(sec2_main)
  const itemsSectionData = generateItemsSectionData(sec2_items)
  return (
    <div className={cls.features}>
      <div className='container'>
        <div className={cls.head}>
          <h2>{mainData.title}</h2>
          <p>{mainData.description}</p>
        </div>
        <div className={cls.list}>
          {itemsSectionData.map((item, idx) => (
            <div className={cls.item} key={idx}>
              <Image
                src={
                  item.image
                    ? `https://gridsapps.xyz/dash/uploads/topics/${item.image}`
                    : '/imgs/services/feature.png'
                }
                alt={item.title as string}
                width={125}
                height={125}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
