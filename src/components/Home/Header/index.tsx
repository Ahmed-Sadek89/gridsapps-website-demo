'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
//= Utils
import { numberFormatter } from '@/utils/formatters';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {}

function Header({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.home.header;

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.top_section}>
          <div className={cls.left_decorations}>
            <img loading='lazy' src="/imgs/decorations/arrow-down-left.svg" alt="" />
            <img loading='lazy' src="/imgs/decorations/growth.svg" alt="" />
          </div>
          <div className={cls.middle_content}>
            <p>{translations.top_section.sub_title}</p>
            <h1>{translations.top_section.title}</h1>
            <p>{translations.top_section.description}</p>
          </div>
          <div className={cls.right_decorations}>
            <img loading='lazy' src="/imgs/decorations/arrow-down-right.svg" alt="" />
            <div className={cls.content}>
              <p>{translations.top_section.clients}</p>
              <div className={cls.clients}>
                <div className={clsx(cls.thumbs, locale === 'ar' ? cls.rtl : '')}>
                  <img loading='lazy' src="/imgs/clients-thumbs/client-thumb-1.svg" alt="" />
                  <img loading='lazy' src="/imgs/clients-thumbs/client-thumb-2.svg" alt="" />
                  <img loading='lazy' src="/imgs/clients-thumbs/client-thumb-3.svg" alt="" />
                  <img loading='lazy' src="/imgs/clients-thumbs/client-thumb-4.svg" alt="" />
                  <img loading='lazy' src="/imgs/clients-thumbs/client-thumb-5.svg" alt="" />
                </div>
                <div className={cls.stars}>
                  <Icon icon='twemoji:star' />
                  {numberFormatter().format(1234)}+
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.middle_section}>
          <ul>
            {
              translations.middle_section.map(item => (
                <li key={item}>{item}</li>
              ))
            }
          </ul>
        </div>
        <div className={cls.bottom_section}>
          <div className={cls.background_border} />
          <div className={cls.background} />
          <button>{translations.bottom_section.button}</button>
          <div className={cls.socials}>
            <div className={cls.icon}>
              <Icon icon='icon-park-outline:dribble' />
            </div>
            <div className={cls.icon}>
              <Icon icon='mingcute:behance-line' />
            </div>
            <div className={cls.icon}>
              <Icon icon='hugeicons:instagram' />
            </div>
            <div className={cls.icon}>
              <Icon icon='jam:linkedin' />
            </div>
          </div>
          <div className={cls.partners}>
            <p>{translations.bottom_section.partners}</p>
            <div className={cls.partner}>
              <img loading='lazy' src="/imgs/partners/Microsoft.svg" alt="microsoft logo" />
            </div>
            <div className={cls.partner}>
              <img loading='lazy' src="/imgs/partners/GoogleMeet.svg" alt="google meet logo" />
            </div>
            <div className={cls.partner}>
              <img loading='lazy' src="/imgs/partners/Zoom.svg" alt="zoom logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header