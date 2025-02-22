'use client';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './aboutGallery.module.scss';

type Props = {}

export default function AboutGallery({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.about.aboutGallery;

  return (
    <div className="container">
      <div className={cls.aboutGallery}>
        <div className={cls.topSide}>
          <div className={cls.images}>
            <div className={cls.img1}>
              <img src="/imgs/about-us/about-image1.png" alt="team" />
            </div>
            <div className={cls.img2}>
              <img src="/imgs/about-us/about-image2.png" alt="team" />
            </div>
          </div>
          <div className={cls.details}>
            <span>{translations.sub_title}</span>
            <h2>{translations.title}</h2>
            <p>{translations.description}</p>
          </div>
        </div>
        <div className={cls.bottomSide}>
          <div className={cls.img}>
            <img src="/imgs/about-us/about-image3.png" alt="team" />
          </div>
          <div className={cls.img}>
            <img src="/imgs/about-us/about-image4.png" alt="team" />
          </div>
        </div>
      </div>
    </div>
  )
}