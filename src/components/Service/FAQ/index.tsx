'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { ITopic_field } from '@/types'
import clsx from 'clsx'
import cls from './faq.module.scss'
import { generateItemsSectionData, generateMainSectionData } from '../get_section_data'

type Props = {
  sec10_main_faq: ITopic_field[] | undefined
  sec10_faq: ITopic_field[] | undefined
}

export default function FAQ ({ sec10_main_faq, sec10_faq }: Props) {
  const mainData = generateMainSectionData(sec10_main_faq)
   const itemsSectionData = generateItemsSectionData(sec10_faq)
  const [questions, setQuestions] = useState(
    itemsSectionData?.map((topic, idx) => ({
      id: idx,
      question: topic.title || '',
      answer: topic.description,
      isExpanded: false
    })) || [
      {
        id: 1,
        question: '',
        answer: '',
        isExpanded: false
      }
    ]
  )
  function expandItem (id: number) {
    setQuestions(prev =>
      prev.map(question => {
        if (question.id === id) {
          return {
            ...question,
            isExpanded: !question.isExpanded
          }
        }
        return question
      })
    )
  }

  return (
    <div className='container'>
      <div className={cls.faq}>
        <div className={cls.header}>
          <h2>{mainData.title}</h2>
          <p>{mainData.description}</p>
        </div>
        <div className={cls.questions}>
          {questions.map((question, index) => (
            <div className={cls.question} key={index}>
              <h4 onClick={() => expandItem(index)}>
                {question.question}
                <div className={cls.icon}>
                  <Icon
                    icon={
                      question.isExpanded
                        ? 'ph:minus-bold'
                        : 'heroicons:plus-16-solid'
                    }
                  />
                </div>
              </h4>
              <p className={clsx({ [cls.expanded]: question.isExpanded })}>
                {question.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
