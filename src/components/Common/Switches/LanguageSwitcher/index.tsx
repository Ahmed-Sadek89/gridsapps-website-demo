"use client";
import { useEffect, useState, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
//= Modules
import Cookies from "universal-cookie";
//= Components
import HoverDropdown from "@/components/UIs/HoverDropdown";
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from "./langSwitch.module.scss";

type Props = {
  isInnerPage?: boolean;
}

function LanguageSwitcher({ isInnerPage }: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []);
  const { translations, locale } = useDictionary();
  const pathname = usePathname();
  const savedLang = pathname.split("/")[1];
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState(savedLang);
  const [flag, setFlag] = useState(savedLang === 'ar' ? '/imgs/locales/ar.png' : '/imgs/locales/en.png');

  useEffect(() => {
    setLang(savedLang);
    setFlag(savedLang === 'ar' ? '/imgs/locales/ar.png' : '/imgs/locales/en.png');
  }, [savedLang]);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    
    const url = new URL(window.location.href);
    const segments = url.pathname.split("/");
    segments[1] = locale; // Update the locale segment
  
    return `${segments.join("/")}${url.search}`;
  };

  function switchLang(lang: string) {
    cookies.set("gridsapps-locale", lang, { path: "/" });
    router.push(redirectedPathName(lang));
  }

  const menu = [
    {
      option: translations.locales.english,
      img: "/imgs/locales/en.png",
      method: switchLang,
      param: "en",
      text: "En"
    },
    {
      option: translations.locales.arabic,
      img: "/imgs/locales/ar.png",
      method: switchLang,
      param: "ar",
      text: "Ar"
    },
  ];

  return (
    <div className={cls.headerDropdown} suppressHydrationWarning
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}>
      <div className={cls.langSwitcher}>
        <img loading='lazy'
          src={flag}
          alt="flag"
          suppressHydrationWarning
        />
        <span suppressHydrationWarning style={{ color: isInnerPage ? '#fff' : '' }}>
          {lang === 'ar' ? 'العربية' : 'EN'}
        </span>
      </div>
      {openMenu && (
        <HoverDropdown width="200px" offset={locale === 'en' ? '-150px' : '-20px'}>
          <div className={cls.head}>
            <p>{translations.locales.languages}</p>
          </div>
          <ul className={cls.langs}>
            {menu.map((item) => (
              <li
                key={item.option}
                onClick={() => {
                  item.method(item.param);
                }}
              >
                {item.img && (
                  <img loading='lazy' src={item.img} alt="flag" className={cls.flag} />
                )}
                <p>{item.option}</p>
              </li>
            ))}
          </ul>
        </HoverDropdown>
      )}
    </div>
  );
}

export default LanguageSwitcher;
