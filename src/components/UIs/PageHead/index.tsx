'use client';
import React from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './page-head.module.scss';

type Props = {
  title: string;
  button?: {
    href: string;
    text: string;
    icon?: string;
  };
  additionalButton?: {
    href: string;
    text: string;
    icon?: string;
  };
}

function PageHead({ title, button, additionalButton }: Props) {

  return (
    <div className={cls.page_head}>
      <h2>{title}</h2>
      {
        additionalButton ?
          <div className="flex gap-3 flex-wrap">
            {
              additionalButton ?
                <button>
                  <Link href={additionalButton.href}>
                    <Icon icon={additionalButton.icon || "basil:add-solid"} />
                    {additionalButton.text}
                  </Link>
                </button>
                : null
            }
            {
              button ?
                <button>
                  <Link href={button.href}>
                    <Icon icon={button.icon || "basil:add-solid"} />
                    {button.text}
                  </Link>
                </button>
                : null
            }
          </div>
          :
          <>
            {
              button ?
                <button>
                  <Link href={button.href}>
                    <Icon icon={button.icon || "basil:add-solid"} />
                    {button.text}
                  </Link>
                </button>
                : null
            }
          </>
      }
    </div>
  )
}

export default PageHead