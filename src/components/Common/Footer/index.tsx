'use client';
import React from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { IContactData, IWebsiteSocial } from '@/types';
//= Styles
import cls from './styles.module.scss';

type Props = {
  data: {
    socials: IWebsiteSocial | undefined;
    contactData: IContactData | undefined;
  }
}

function Footer({ data: { socials, contactData } }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.layout.footer;

  const links_column_1 = [
    {
      title: translations.links.about_us,
      link: '/about-us'
    },
    {
      title: translations.links.faq,
      link: '/faq'
    },
    {
      title: translations.links.services,
      link: '/services'
    },
    {
      title: translations.links.contact,
      link: '/contact'
    }
  ]

  const links_column_2 = [
    {
      title: translations.links.refund,
      link: '/refund-policy'
    },
    {
      title: translations.links.terms,
      link: '/terms'
    },
    {
      title: translations.links.privacy,
      link: '/privacy-policy'
    }
  ]

  return (
    <footer className={cls.footer}>
      <div className="container">
        <div className={cls.call_action}>
          <div className={cls.texts}>
            <h3>{translations.call_action.title}</h3>
            <p>{translations.call_action.text}</p>
          </div>
          <button>
            <Link href="/contact">
              {translations.call_action.button}
            </Link>
          </button>
        </div>
        <div className={cls.content}>
          <div className={cls.footer_grid}>
            <div className={cls.info}>
              <div className={cls.logo}>
                <Link href="/">
                  <img loading='lazy' src="/imgs/logos/logo-without-icon.svg" alt="logo" />
                </Link>
                <div className={cls.payments}>
                  <img src="/imgs/payment/visa.svg" alt="" />
                  <img src="/imgs/payment/mastercard.svg" alt="" />
                  <img src="/imgs/payment/lahza.svg" alt="" />
                </div>
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
              </div>
            </div>
            <div className={cls.links}>
              <div className={cls.column}>
                <ul>
                  {
                    links_column_1.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={cls.column}>
                <ul>
                  {
                    links_column_2.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className={cls.contact}>
              <h5>{translations.contact.title}</h5>
              <p>
                <Icon icon='fluent:location-24-filled' />
                <span>{contactData?.phone}</span>
              </p>
              <p>
                <Icon icon='ep:phone-filled' />
                <span>{contactData?.email}</span>
              </p>
              <p>
                <Icon icon='mage:email-fill' />
                <span>{contactData?.address}</span>
              </p>
            </div>
          </div>
          <div className={cls.copyright}>
            {translations.copyright.part1} {new Date().getFullYear()}. {translations.copyright.part2}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
