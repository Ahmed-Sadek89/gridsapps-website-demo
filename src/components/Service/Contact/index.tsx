'use client';
import React from 'react';
//= Modules
import zod from 'zod';
//= Hooks
import { useCompoundState } from '@/hooks';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Utils
import { toaster } from '@/utils/toaster';
import { startLoadingBtn, stopLoadingBtn } from '@/utils/loadingBtn';
//= Types
import type { ContactFields } from './types';
import { IContactData } from '@/types';
//= Api
import { sendQuote } from '@/api';
//= Styles
import cls from './contact.module.scss';
import clsx from 'clsx';

type Props = {
  serviceId: number;
  contactData: IContactData | undefined;
}

export default function ServiceContact({ serviceId, contactData }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.serviceDetails.contact;
  const [data, dispatch, reset] = useCompoundState<ContactFields>({
    order_name: '',
    order_email: '',
    order_phone: '',
    company: '',
    quote: '',
    services: '',
    order_message: '',
  })

  const postComment = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const schema = zod.object({
      order_email: zod.string().email(),
    })
    if (!schema.safeParse({ order_email: data.order_email }).success) {
      return toaster.error(translations.form.invalidEmail);
    }
    startLoadingBtn(event);
    const payload = {
      api_key: 402784613679330,
      topic_id: serviceId,
      order_name: data.order_name,
      order_phone: data.order_phone,
      order_email: data.order_email,
      order_qty: 1,
      order_message: data.order_message
    }
    try {
      const response = await sendQuote(payload);
      toaster.success(response ? response.msg : '');
      reset();
    } catch (err: any) {
      stopLoadingBtn(event);
      toaster.error(err.response.data.message);
    }
    stopLoadingBtn(event);
  }

  return (
    <div className='container'>
      <div className={cls.contact}>
        <div className={clsx(cls.detailsSide, cls[locale])}>
          <img className={cls.fly} src="/imgs/decorations/fly.svg" alt="fly" />
          <div className={cls.content}>
            <img className={cls.doted} src="/imgs/decorations/doted.svg" alt="doted" />
            <div>
              <h2>{translations.title}</h2>
              <h3>{translations.sub_title}</h3>
              <span>{translations.text}</span>
              <p>{contactData?.phone}</p>
            </div>
            <img className={cls.ball} src="/imgs/decorations/ball.svg" alt="ball" />
          </div>
        </div>
        <div className={cls.formSide}>
          <div className={cls.field}>
            <input type="text" placeholder={translations.form.name} value={data.order_name} onChange={(e) => dispatch({ order_name: e.target.value })} />
            <input type="text" placeholder={translations.form.email} value={data.order_email} onChange={(e) => dispatch({ order_email: e.target.value })} />
          </div>
          <div className={cls.field}>
            <input type="text" placeholder={translations.form.phone} value={data.order_phone} onChange={(e) => dispatch({ order_phone: e.target.value })} />
            <input type="text" placeholder={translations.form.company} value={data.company} onChange={(e) => dispatch({ company: e.target.value })} />
          </div>
          <div className={cls.field}>
            <select defaultValue={translations.form.quote} value={data.quote} onChange={(e) => dispatch({ quote: e.target.value })} >
              <option>{translations.form.quote}</option>
            </select>
            <select defaultValue={translations.form.quote} value={data.services} onChange={(e) => dispatch({ services: e.target.value })}>
              <option>{translations.form.services}</option>
            </select>
          </div>
          <div className={cls.fullField}>
            <input type="text" placeholder={translations.form.notes} value={data.order_message} onChange={(e) => dispatch({ order_message: e.target.value })} />
          </div>
          <button onClick={(e) => postComment(e)}>{translations.form.submit}</button>
        </div>
      </div>
    </div>
  )
}