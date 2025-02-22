'use client';
import { ITopic } from '@/types';
//= Components
import ServiceItem from './Item';
//= Styles
import cls from './services.module.scss';

type Props = {
  data: ITopic[];
}

export default function ServicesCategoriesList({ data }: Props) {
  return (
    <div className="container">
      <div className={cls.wrapper}>
        {data.map((item, index) => (
          <ServiceItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}