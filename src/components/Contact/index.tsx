import React from 'react'
//= Components
import Info from './Info';
import Form from './Form';
import KeepInTouch from '../Home/KeepInTouch';
//= Types
import type { IContactData, IWebsiteSocial, SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: {
    addresses: SectionsResponse | undefined;
    socials: IWebsiteSocial | undefined;
    contactData: IContactData | undefined;
  }
}

export default function ContactWrapper({ data: { addresses, socials, contactData } }: Props) {
  return (
    <section className={cls.contact}>
      <div className="container">
        <Info data={{ socials, contactData }} />
      </div>
      <Form />
      <div className="container">
        <KeepInTouch data={addresses} />
      </div>
    </section>
  )
}
