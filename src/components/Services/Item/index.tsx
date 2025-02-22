import { ITopic } from '@/types'
import useDictionary from '@/dictionaries/clientDictionary'
import cls from './item.module.scss'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  item: ITopic
}

export default function ServiceItem ({ item }: Props) {
  const { translations: dictionary } = useDictionary()
  const translations = dictionary.common.services
  return (
    <div className={cls.service}>
      <div className={cls.image}>
        <Image
          width={110}
          height={110}
          src={item.photo_file || ''}
          alt={item.title}
        />
      </div>
      <div className={cls.content}>
        <h3>{item.title}</h3>
        <div
        style={{height:"175px", overflow:"hidden", display:"flex", alignItems:"center"}}
          dangerouslySetInnerHTML={{
            __html: `${item.details.substring(0, 200)}...` || ''
          }}
        ></div>
      </div>
      <Link href={`/service/${item.title}?id=${item.id}`}>
        {translations.service.readMore}
      </Link>
    </div>
  )
}
