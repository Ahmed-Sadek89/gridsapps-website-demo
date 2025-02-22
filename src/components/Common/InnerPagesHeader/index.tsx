import React from 'react'
//= Styles
import cls from './styles.module.scss'

type Props = {
  title: string
  description: string
  image?: string
}

// Function to decode HTML entities
const decodeEntities = (text: string) => {
  return text
    .replace(/&nbsp;/g, ' ') // Replace non-breaking space with a normal space
    .replace(/&amp;/g, '&') // Replace HTML ampersand with "&"
    .replace(/<\/?[^>]+(>|$)/g, '') // Remove any remaining HTML tags
}

function Header ({
  title,
  description,
  image = '/imgs/innser_pages.svg'
}: Props) {
  const cleanText = decodeEntities(description)

  // Find first occurrence of "." or "," to truncate cleanly
  const endIndex = cleanText.search(/[.,]/)
  const truncatedText =
    endIndex !== -1
      ? cleanText.substring(0, endIndex + 1)
      : cleanText.slice(0, 100) + '...'

  return (
    <header className={cls.header}>
      <div className={cls.icon}>
        <img loading='lazy' src={image} alt='header image' />
      </div>
      <div className={cls.content}>
        <h1>{title}</h1>
        <p>{truncatedText}</p>
      </div>
    </header>
  )
}

export default Header
