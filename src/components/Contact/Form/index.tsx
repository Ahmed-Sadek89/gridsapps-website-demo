'use client';
import React from 'react'
//= Components
import { Icon } from '@iconify/react';
import Input from '@/components/UIs/Input';
import TextArea from '@/components/UIs/TextArea';
//= Hooks
import { useCompoundState } from '@/hooks';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';
import { sendContactMessage } from '@/api/contact';
import { toaster } from '@/utils/toaster';

type Props = {
}

export default function ContactForm({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.contact.form;
  const [data, dispatch] = useCompoundState({
    api_key: "402784613679330",
    topic_id: "",
    company_name: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
    contact_subject: "",
    contact_message: ""
  });


  async function handleSendContactMessage(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const btn = event.currentTarget;
    btn.classList.add('loading-btn');

    const response = await sendContactMessage(data);

    if (response) {
      toaster.success(translations.messageSent);
    }

    btn.classList.remove('loading-btn');
  }

  return (
    <div className={cls.contact_form}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.description}</p>
        </div>
        <div className={cls.form}>
          <div className={clsx(cls.field, cls.half_width)}>
            <Input
              name='first_name'
              label={translations.fullName}
              placeholder={translations.fullName}
              value={data.contact_name}
              onChange={(e) => dispatch({ contact_name: e.target.value })}
            />
          </div>
          <div className={clsx(cls.field, cls.half_width)}>
            <Input
              name='company_name'
              label={translations.companyName}
              placeholder={translations.companyName}
              value={data.company_name}
              onChange={(e) => dispatch({ company_name: e.target.value })}
            />
          </div>
          <div className={clsx(cls.field)}>
            <Input
              name='email'
              label={translations.email}
              type="email"
              placeholder={translations.email}
              value={data.contact_email}
              onChange={(e) => dispatch({ contact_email: e.target.value })}
            />
          </div>
          <div className={clsx(cls.field)}>
            <Input
              name='phone'
              type="tel"
              label={translations.phone}
              placeholder={translations.phone}
              value={data.contact_phone}
              onChange={(e) => dispatch({ contact_phone: e.target.value })}
            />
          </div>
          <div className={clsx(cls.field)}>
            <Input
              name='subject'
              label={translations.subject}
              placeholder={translations.subject}
              value={data.contact_subject}
              onChange={(e) => dispatch({ contact_subject: e.target.value })}
            />
          </div>
          <div className={clsx(cls.field)}>
            <TextArea
              name='message'
              label={translations.message}
              placeholder={translations.message}
              value={data.contact_message}
              onChange={(e) => dispatch({ contact_message: e.target.value })}
            />
          </div>
          <button onClick={handleSendContactMessage}>{translations.button}</button>
        </div>
      </div>
    </div>
  )
}
