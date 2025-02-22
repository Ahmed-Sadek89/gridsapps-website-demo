'use client';
import React, { useState } from 'react';
import Link from 'next/link';
//= Components
import ReCAPTCHA from "react-google-recaptcha";
import Input from '@/components/UIs/Input';
import SearchSelect from '@/components/UIs/SearchSelect';
//= Utils
import { toaster } from '@/utils/toaster';
import { currencyFormatter } from '@/utils/formatters';
//= Hooks
import { useCompoundState } from '@/hooks';
//= Api
import { sendOrder } from '@/api';
//= Static Data
import countries_list from './countries.json';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

interface Package {
  id: number;
  title: string;
  price: number;
  duration: number;
  off: number;
  fields: {
    title: string;
    value: number;
  }[];
}

type Props = {
  packages: Package[] |undefined;
}

export default function PackagesForm({ packages }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.packages;
  const [token, setToken] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [data, dispatch] = useCompoundState({
    name: '',
    email: '',
    phone: '',
    country: "Palestine",
    package: '',
  });

  const countries = countries_list.map((item: any) => ({
    value: item.name,
    label: item.name,
  }));

  function handleVerify(token: string | null) {
    if (!token) return;
    setToken(token);
  }

  async function confirmPayment(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const btn = event.currentTarget;
    btn.classList.add('loading-btn');

    if (!data.package) {
      btn.classList.remove('loading-btn');
      return toaster.error(translations.form.package_not_selected);
    }

    if (!data.name || !data.email || !data.phone) {
      btn.classList.remove('loading-btn');
      return toaster.error(translations.form.empty_error);
    }

    if (!token) {
      btn.classList.remove('loading-btn');
      return toaster.error(translations.form.recaptcha_error);
    }

    // @ts-ignore
    if (typeof LahzaPopup === 'undefined') {
      btn.classList.remove('loading-btn');
      return toaster.error(translations.form.lahza_error);
    }

    // @ts-ignore
    const lahza = new LahzaPopup();
    const packagePrice = packages?.find(item => item.id === +data.package)?.fields.find((field: any) => field.title === (locale === 'en' ? 'Price' : 'السعر'))?.value || 0;

    lahza.newTransaction({
      key: "pk_test_rMqv4CdzecJRC8PvLY8wizxAAgEhtZo5h",
      firstName: data.name,
      email: data.email,
      mobile: data.phone,
      metadata: {
        package: data.package
      },
      currency: "USD",
      amount: packagePrice * 100,
      onSuccess: async (transaction: any) => {
        const response = await sendOrder({
          ...data,
          message: `لقد تم شراء باقة ${packages?.find(item => item.id === +data.package)?.title}  بسعر ${packagePrice} $ ورقم عملية الشراء هو ${transaction.reference}`
        });

        // @ts-ignore
        if (response && response.status === 201) {
          let message = translations.form.payment_completed + transaction.reference;
          // setSuccessInfo(message);
          // setOpenSuccessModal(true);
        }
        btn.classList.remove('loading-btn');
      },
      onCancel: () => {
        // setOpenCloseForm(true);
        btn.classList.remove('loading-btn');
      }
    });

    btn.classList.remove('loading-btn');
  }

  return (
    <div className={cls.form}>
      <div className="container">
        <div className={cls.packages_list}>
          {
            packages?.map((item, index) => (
              <div key={index} className={clsx(cls.package, { [cls.selected]: data.package === item.title })}>
                <div className={cls.package_title}>
                  <label htmlFor={`package-${item.id}`}>{item.title}</label>
                  <input type="radio" className="ui-radiobox" name='package' id={`package-${item.id}`} onChange={e => dispatch({ package: e.target.checked ? item.title : '' })} />
                </div>
                <div className={cls.package_price}>{currencyFormatter({ locale, currency: 'USD' }).format(item.price)}</div>
                <div className={cls.package_off}>{item.off}% {translations.content.off}</div>
                <div className={cls.package_duration}>{item.duration} {translations.content.month}</div>
              </div>
            ))
          }
        </div>
      </div>
      <form>
        <div className="container">
          <div className={cls.meta}>
            <h2>{translations.form.title}</h2>
            <p>{translations.form.description}</p>
          </div>
          <div className={cls.form_inputs}>
            <div className={clsx(cls.field, cls.half_width)}>
              <Input
                name='name'
                label={translations.form.name}
                placeholder={translations.form.name}
                value={data.name}
                onChange={(e) => dispatch({ name: e.target.value })}
              />
            </div>
            <div className={clsx(cls.field, cls.half_width)}>
              <Input
                name='phone'
                type="tel"
                label={translations.form.phone}
                placeholder={translations.form.phone}
                value={data.phone}
                onChange={(e) => dispatch({ phone: e.target.value })}
              />
            </div>
            <div className={clsx(cls.field)}>
              <Input
                name='email'
                label={translations.form.email}
                placeholder={translations.form.email}
                value={data.email}
                onChange={(e) => dispatch({ email: e.target.value })}
              />
            </div>
            <div className={clsx(cls.field)}>
              <label>{translations.form.country}</label>
              <SearchSelect
                placeholder={translations.form.country}
                options={countries}
                selectedOption={data.country}
                setSelectedOption={(option) => dispatch({ country: option.value })}
              />
            </div>
            <div className={cls.field} style={{ display: 'flex', paddingInlineStart: '5px', alignItems: 'center' }}>
              <input type="checkbox" className="ui-checkbox" checked={isAgree} onChange={(e) => setIsAgree(e.target.checked)} style={{ width: '20px', margin: '0', cursor: 'pointer' }} />
              <label className={cls.terms}>
                <span>{translations.form.agree.part1}</span>
                <Link href="/terms" style={{ textDecoration: 'underline' }}>
                  {translations.form.agree.part2}
                </Link>
                <span>{translations.form.agree.part3}</span>
                <Link href="/privacy-policy" style={{ textDecoration: 'underline' }}>
                  {translations.form.agree.part4}
                </Link>
              </label>
            </div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'asd'}
              onChange={(token) => handleVerify(token)}
              className={cls.recaptcha}
            />
            <button onClick={confirmPayment} disabled={!isAgree}>{translations.form.button}</button>
          </div>
        </div>
      </form>
    </div>
  )
}
