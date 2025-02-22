'use client';
import React, { useState } from 'react';
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  data: SectionsResponse | undefined
}

function FrequentlyAskedQuestions({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.faq.questions;
  const [questions, setQuestions] = useState(data?.topics?.map(topic => ({
    id: topic.id,
    question: topic.title || '',
    answer: topic.details,
    isExpanded: false
  })) || [
      {
        id: 1,
        question: translations.question1,
        answer: translations.answer,
        isExpanded: false
      }]);

  function expandItem(id: number) {
    setQuestions(prev => prev.map(question => {
      if (question.id === id) {
        return {
          ...question,
          isExpanded: !question.isExpanded
        }
      }
      return question;
    }))
  }

  return (
    <div className="container">
      <section className={cls.faq}>
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.description}</p>
        </div>
        <div className={cls.questions}>
          {
            questions.map((question, index) => (
              <div className={cls.question} key={index}>
                <h4 onClick={() => expandItem(question.id)}>
                  {question.question}
                  <div className={cls.icon}>
                    <Icon icon={question.isExpanded ? "ph:minus-bold" : "heroicons:plus-16-solid"} />
                  </div>
                </h4>
                <p className={clsx({ [cls.expanded]: question.isExpanded })}>{question.answer}</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default FrequentlyAskedQuestions