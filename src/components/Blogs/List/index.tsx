'use client';
import React, { useState } from 'react';
import Link from 'next/link';
//= Components
import Input from '@/components/UIs/Input';
import PostsList from './PostsList';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

function BlogsList({ data }: Props) {
  const [searchText, setSearchText] = useState('');
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.blog.content;
  const mainPost = data?.topics?.[0];

  function changeCategoryFilter(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    document.querySelectorAll(`.${cls.filter}`).forEach(el => el.classList.remove(cls.active));
    event.currentTarget.classList.add(cls.active);
  }

  return (
    <div className={cls.blogs_list}>
      <div className="container">
        <div className={clsx(cls.search, cls.field)}>
          <Input
             style={{borderRadius: '30px'}}
            name="search"
            type="search"
            placeholder={translations.searchInput}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            icon='circum:search'
          />
        </div>
        <div className={cls.filters}>
          <div className={clsx(cls.filter, cls.active)} onClick={changeCategoryFilter}>
            <button>{translations.filters[0]}</button>
          </div>
          <div className={cls.filter} onClick={changeCategoryFilter}>
            <button>{translations.filters[1]}</button>
          </div>
          <div className={cls.filter} onClick={changeCategoryFilter}>
            <button>{translations.filters[2]}</button>
          </div>
          <div className={cls.filter} onClick={changeCategoryFilter}>
            <button>{translations.filters[3]}</button>
          </div>
          <div className={cls.filter} onClick={changeCategoryFilter}>
            <button>{translations.filters[4]}</button>
          </div>
        </div>
        <div className={cls.main_post}>
          <div className={cls.image}>
            <Link href={`/blog/${mainPost?.id}`}>
              <img loading='lazy' src={mainPost?.photo_file || ''} alt="post image" />
            </Link>
          </div>
          <div className={clsx(cls.content, { [cls.rtl]: locale === 'ar' })}>
            <Link href={`/blog/${mainPost?.id}`}>
              <h3>{mainPost?.title}</h3>
            </Link>
            <p className={cls.text} dangerouslySetInnerHTML={{ __html: mainPost?.details || '' }} />
            <div className={cls.actions}>
              <div className={cls.author}>
                <div className={cls.img}>
                  <img loading='lazy' src="/imgs/logos/logo-icon.svg" alt="" />
                </div>
                <div className={cls.info}>
                  <p>{mainPost?.user.name}</p>
                  <p>{mainPost?.date}</p>
                </div>
              </div>
              <button>
                <Link href={`/blog/${mainPost?.id}`}>{translations.main_post.read_more}</Link>
              </button>
            </div>
          </div>
        </div>
        <PostsList data={data?.topics?.slice(1)} />
      </div>
    </div>
  )
}

export default BlogsList