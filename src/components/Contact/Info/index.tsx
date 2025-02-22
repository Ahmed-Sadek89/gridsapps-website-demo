'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { IContactData, IWebsiteSocial } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: {
    socials: IWebsiteSocial | undefined;
    contactData: IContactData | undefined;
  }
}

export default function ContactInfo({ data: { socials, contactData } }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.contact.info;

  return (
    <div className={cls.contact_info}>
      <div className={cls.map}>
        <div className={cls.left}>
          <h2>{translations.title}</h2>
          <p>{translations.description}</p>
        </div>
        <div className={cls.right}>
          <img loading='lazy' src="/imgs/contact/map.svg" alt="" />
        </div>
      </div>
      <div className={cls.info}>
        <div className={cls.socials}>
          <a href={socials?.facebook} target='_blank'>
            <Icon icon='hugeicons:facebook-01' />
          </a>
          <a href={socials?.instagram} target='_blank'>
            <Icon icon='hugeicons:instagram' />
          </a>
          <a href={socials?.twitter} target='_blank'>
            <Icon icon='hugeicons:new-twitter-rectangle' />
          </a>
          <a href={socials?.linkedin} target='_blank'>
            <Icon icon='hugeicons:linkedin-01' />
          </a>
          <a href={`https://wa.me/${socials?.whatsapp}`} target='_blank'>
            <Icon icon='ic:outline-whatsapp' />
          </a>
          <a href={socials?.youtube} target='_blank'>
            <Icon icon='iconoir:youtube' />
          </a>
        </div>
        <div className={cls.phone}>
          <Icon icon='ep:phone-filled' />
          <p>{contactData?.phone}</p>
        </div>
        <div className={cls.location}>
          <Icon icon='fluent:location-24-filled' />
          <p>{contactData?.address}</p>
        </div>
      </div>
    </div>
  )
}
