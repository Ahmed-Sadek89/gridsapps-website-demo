'use client'
import { ITopic_field } from '@/types'
import cls from './info.module.scss'
import { useState } from 'react'

type Props = {
  title: string
  details: string
  sec1_button_fields: ITopic_field[] | undefined
}

export default function Info ({ title, details, sec1_button_fields }: Props) {
  console.log({ details })
  const [expanded, setExpanded] = useState(false)
  const toggleExpand = () => setExpanded(!expanded);
  const previewLength = 700;
  const isTruncated = details.length > previewLength;

  return (
    <div className='container'>
      <div className={cls.info}>
        <h2>{title}</h2>
        <div>
          <p className='inline'>
            <span
              dangerouslySetInnerHTML={{
                __html: expanded ? details : details.slice(0, previewLength)
              }}
            ></span>
            {isTruncated && !expanded && '... '}
            {isTruncated && (
              <span
                onClick={toggleExpand}
                style={{color: "#0071de", cursor: "pointer"}}
              >
                {expanded ? ' Show Less' : ' Show More'}
              </span>
            )}
          </p>
        </div>
        <div className={cls.items}>
          {sec1_button_fields ? (
            sec1_button_fields.map((btn, index) => (
              <p key={index}>{btn.value}</p>
            ))
          ) : (
            <p>Not found</p>
          )}
        </div>
      </div>
    </div>
  )
}
