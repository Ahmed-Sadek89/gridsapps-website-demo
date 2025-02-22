import React from 'react'
//= Components
import Header from '@/components/Common/InnerPagesHeader'
import ServiceWrapper from '@/components/Service'
//= Api
import { asyncHandler } from '@/utils/asyncHandler'
import { getFAQs, getTestimonials, getVideo } from '@/api/sections'
import { getServiceDetails } from '@/api'
import { getContactData } from '@/api/home'
//= I18n
import getDictionary from '@/dictionaries/serverDictionary'

export async function generateMetadata ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const id = (await searchParams).id
  const { translations, locale } = await getDictionary()
  const serviceDetails = await getServiceDetails(locale, Number(id))
  const title = serviceDetails?.topic ? serviceDetails?.topic[0].title : ''
  return {
    title: `${translations.pagesTitles.websiteName} - ${title}`,
    description:
      'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function ServiceDetailsPage ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const id = (await searchParams).id

  const { translations: dictionary, locale } = await getDictionary()
  const translations = dictionary.serviceDetails.header
  const [serviceDetails, faqs, testimonials, video, contactData] =
    await Promise.all([
      asyncHandler(async () => await getServiceDetails(locale, Number(id))),
      asyncHandler(async () => await getFAQs(locale)),
      asyncHandler(async () => await getTestimonials(locale)),
      asyncHandler(async () => await getVideo(locale)),
      asyncHandler(async () => await getContactData(locale))
    ])
  const topic = serviceDetails?.topic
    ? serviceDetails?.topic[0]
    : null
  const details = topic?.details
  return (
    <main>
      <Header
        title={translations.title}
        description={details as string}
      />
      <ServiceWrapper
        serviceId={Number(id)}
        data={{ serviceDetails, faqs, video, testimonials, contactData }}
      />
    </main>
  )
}
