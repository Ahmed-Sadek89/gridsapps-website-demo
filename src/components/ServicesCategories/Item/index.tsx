'use client';
//= Types
import { ITopic } from "@/types";
//= Styles
import cls from './item.module.scss';

type Props = {
  item: ITopic;
}

export default function ServiceItem({ item }: Props) {
  return (
    <div className={cls.service}>
      <div className={cls.image}>
        <img loading='lazy' src={item.photo_file || ''} alt={item.title} />
      </div>
      <div className={cls.content}>
        <h3>{item.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: `${item.details.substring(0, 200)}...` || '' }}></div>
      </div>
    </div >
  )
}