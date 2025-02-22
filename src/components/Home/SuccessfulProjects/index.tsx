'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import cls from './styles.module.scss';
import Link from 'next/link';

type Props = {
  data: SectionsResponse | undefined;
}

export default function SuccessfullProject({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.successfull_projects;

  return (
    <section className={cls.successful_projects}>
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.meta}>
            <h2>{translations.title}</h2>
            <p>{translations.sub_title}</p>
          </div>
          <div className={cls.projects}>
            <div className={cls.row_project}>
              <div className={cls.project}>
                <div className={cls.content}>
                  <h4>{translations.project_title}</h4>
                  <p>{translations.lorem}</p>
                </div>
                <button>{translations.project_button}</button>
              </div>
            </div>
            <div className={cls.side_project}>
              <div className={cls.project}>
                <div className={cls.content}>
                  <h4>{translations.project_title}</h4>
                  <p>{translations.lorem}</p>
                </div>
              </div>
              <div className={cls.project}>
                <div className={cls.content}>
                  <h4>{translations.project_title}</h4>
                  <p>{translations.lorem}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href={'/portfolio'}>{translations.button}</Link>
      </div>
    </section>
  )
}
