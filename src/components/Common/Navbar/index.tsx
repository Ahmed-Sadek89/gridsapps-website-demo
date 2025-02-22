'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
import LanguageSwitcher from "@/components/Common/Switches/LanguageSwitcher";
//= I18n
import useDictionary from "@/dictionaries/clientDictionary";
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';
import { usePathname } from 'next/navigation';

type Props = {
  isInnerPage?: boolean;
}

function Navbar({ isInnerPage }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.layout.navbar;
  const pathname = usePathname();

  const links = [
    {
      title: translations.links.home,
      link: '/'
    },
    {
      title: translations.links.about_us,
      link: '/about-us'
    },
    {
      title: translations.links.services,
      link: '/services'
    },
    {
      title: translations.links.portfolio,
      link: '/portfolio'
    },
    {
      title: translations.links.team,
      link: '/team'
    },
    {
      title: translations.links.blogs,
      link: '/blog'
    },
    {
      title: translations.links.packages,
      link: '/packages'
    }
  ]

  function toggleNavbar(state: string) {
    if (state === 'close') {
      setOpenMobileNavbar(false);
    } else {
      setOpenMobileNavbar(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <div className={clsx(cls.nav_wrapper, { [cls.scrolled]: isScrolled, [cls.inner_page]: isInnerPage && !isScrolled })}>
      <div className="container">
        <nav className={cls.navigation_bar}>
          <div className={cls.logo}>
            <Link href="/">
              <img loading='lazy' src={isInnerPage && !isScrolled ? `/imgs/logos/logo-hz-white.png` : `/imgs/logos/logo-icon.svg`} alt="logo" />
            </Link>
          </div>
          <div className={clsx(cls.links, { [cls.show]: openMobileNavbar })}>
            <div className={cls.mobile_toggler} onClick={() => toggleNavbar('close')}>
              <Icon icon="line-md:arrow-left" />
            </div>
            <ul>
              {
                links.map(link => (
                  <li key={link.title}>
                    <Link href={link.link} data-text={link.title} className={pathname.substring(0, pathname.length - 2) === link.link ? cls.active : ''}>
                      {link.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={cls.actions}>
            <div className={cls.mobile_menu_toggler} onClick={() => toggleNavbar('open')}>
              <Icon icon="gg:menu-round" />
            </div>
            <LanguageSwitcher isInnerPage={isInnerPage && !isScrolled} />
            <div className={cls.contact}>
              <button>
                <Link href="/contact">
                  {translations.links.contact}
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
