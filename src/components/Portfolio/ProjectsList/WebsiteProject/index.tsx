'use client';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import { ITopic } from '@/types';
//= Styles
import cls from './websiteProject.module.scss';

type Props = {
  project: ITopic;
}

export default function WebsiteProject({ project }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.portfolio.content.project;

  return (
    <div className={cls.projectWrapper}>
      <div className={cls.project} style={{ backgroundImage: `url(${project.photo_file})` }}>
        <div className={cls.content}>
          <h4>{project.title.length > 40 ? project.title.substring(0, 40) + '...' : project.title}</h4>
          <p>{project.details}</p>
        </div>
      </div>
      <div className={cls.footer}>
        <div>
          {/* <p>ECommerce</p> */}
          <span>{project?.fields?.find(item => item?.title === 'link')?.value}</span>
        </div>
        <Link href={`${project?.fields?.find(item => item?.title === 'link')?.value}`} target="_blank">
          <button>
            <Icon icon="ph:arrow-up-bold" />
          </button>
        </Link>
      </div>
    </div>
  )
}