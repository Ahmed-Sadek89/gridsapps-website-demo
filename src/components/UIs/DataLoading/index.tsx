//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './dataLoading.module.scss';

type Props = {
  isLoading: boolean;
  label: string;
  marginTop?: boolean;
}

function DataLoading({ isLoading, label, marginTop }: Props) {
  return (
    <>
      {isLoading ?
        <div className={cls.loading_data} style={{ marginTop: marginTop ? '15px' : '0px' }}>
          <Icon icon="eos-icons:bubble-loading" />
          {label}
        </div>
        :
        null
      }
    </>
  )
}

export default DataLoading;