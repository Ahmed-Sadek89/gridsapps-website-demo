import cls from './features.module.scss'
import { ITopic_field } from '@/types'
import { generateMainSectionData } from '../get_section_data'
import Image from 'next/image'

type Props = { sec4_main: ITopic_field[] | undefined }

export default function Features2 ({ sec4_main }: Props) {
  const mainData = generateMainSectionData(sec4_main)
  return (
    <div className={cls.features}>
      <div>
        <div className={cls.head}>
          <h2>{mainData.title}</h2>
          <p>{mainData.description}</p>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {mainData.image ? (
            <Image
              src={`https://gridsapps.xyz/dash/uploads/topics/${mainData.image}`}
              alt={mainData.title}
              width={600}
              height={600}
              style={{ objectFit: 'contain', width: 'auto' }}
            />
          ) : (
            <Image
              alt={mainData.title}
              width={125}
              height={125}
              src='/imgs/services/group.svg'
              style={{ objectFit: 'contain', width: 'auto' }}

            />
          )}
        </div>
      </div>
    </div>
  )
}
