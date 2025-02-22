'use client';
//= Components
import CountUp from 'react-countup';
//= Types
import type { ITopic } from '@/types';
//= Styles
import cls from './statistics.module.scss';

type Props = {
  data: ITopic | undefined;
}

export default function Statistics({ data }: Props) {
  return (
    <div className={cls.statistics}>
      <img className={cls.bellImage} src="/imgs/about-us/bell.png" alt="" />
      <img className={cls.rightDashed} src="/imgs/decorations/dashed-line2.svg" alt="" />
      <img className={cls.leftDashed} src="/imgs/decorations/dashed-line2.svg" alt="" />
      {data?.fields?.map((field, idx) => (
        <div className={cls.item} key={idx}>
          <CountUp
            start={0}
            end={+field?.value}
            duration={3}
            separator=" "
            decimals={0}
            decimal=","
            enableScrollSpy
          />
          <p>{field?.title}</p>
        </div>
      ))}
    </div>
  )
}