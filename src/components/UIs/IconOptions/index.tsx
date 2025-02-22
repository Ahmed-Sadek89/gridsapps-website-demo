'use client';
import { useState } from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
// import { Tooltip } from '@mui/material';
//= I18n
import useDictionary from "@/dictionaries/clientDictionary";
//= Styles
import cls from './iconOptions.module.scss';


type Option = {
  label: string | React.ReactNode;
  action: string | (() => void);
  hidden?: boolean;
}

type Props = {
  options: Option[];
  className?: string;
  tooltip?: string;
  icon?: string;
  noBorder?: boolean;
}

function IconOptions({ options, className, tooltip, icon, noBorder }: Props) {
  const { locale } = useDictionary();
  const [openSelect, setOpenSelect] = useState(false);

  const chooseOption = (option: Option) => {
    if (typeof option.action === 'function') option.action();
    setOpenSelect(false);
  }

  return (
    <>
      {openSelect && <div className={cls.overlay} onClick={() => setOpenSelect(false)}></div>}
      <div className={`${cls.box} ${className ? className : ''} ${locale === 'ar' ? cls.rtl : ''}`} data-label="icon">
        <button onClick={() => setOpenSelect(!openSelect)} style={{ border: noBorder ? 'none' : '' }}>
          {/* <Tooltip title={tooltip}> */}
          <Icon icon={icon || "solar:menu-dots-bold"} />
          {/* </Tooltip> */}
          {openSelect &&
            <div className={cls.selectArea}>
              {options.map((option) => (
                !option.hidden &&
                (typeof option.action === 'string' ?
                  <Link href={option.action} key={Math.floor(Math.random() * 10000)}>
                    {option.label}
                  </Link>
                  :
                  <p onClick={() => chooseOption(option)} key={Math.floor(Math.random() * 10000)}>{option.label}</p>)
              ))}
            </div>
          }
        </button>
      </div>
    </>
  )
}

export default IconOptions;