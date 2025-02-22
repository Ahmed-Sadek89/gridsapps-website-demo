import React from 'react'
//= Components
import HomePageLayout from '@/components/Layouts/Home'
import Services from '@/components/Home/Services'
import Discover from '@/components/Home/Discover'
import Process from '@/components/Home/Process'
import SuccessfullProject from '@/components/Home/SuccessfulProjects'
import Projects from '@/components/Home/Projects'
import Activities from '@/components/Home/Activities'
import Testimonials from '@/components/Home/Testimonials'
import Video from '@/components/Home/Video'
import ProjectsInBrief from '@/components/Home/ProjectsInBrief'
import Team from '@/components/Home/Team'
import Blog from '@/components/Home/Blog'
import KeepInTouch from '@/components/Home/KeepInTouch'
//= I18n
import getDictionary from '@/dictionaries/serverDictionary'
import { asyncHandler } from '@/utils/asyncHandler'
import { getAllSections } from '@/api/home'
import { getWebProjects } from '@/api/web_projects'

export async function generateMetadata () {
  const { translations } = await getDictionary()

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.home}`,
    description:
      'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function Home () {
  const { locale } = await getDictionary()

  const {
    services,
    solutions,
    steps,
    activites,
    testimonials,
    platforms,
    video,
    briefProjects,
    team,
    blogs,
    addresses
  } = (await asyncHandler(async () => await getAllSections(locale))) || {}
  const { topics } =
    (await asyncHandler(async () => await getWebProjects(locale, 26))) || {}
  return (
    //= (1) Header Section need api
    <HomePageLayout>
      <Services data={services} />
      <Discover data={solutions} />
      <Process data={steps} />
      {/* (2) SuccessfullProject section needs api */}
      <SuccessfullProject data={steps} />
      {/* (3) Projects section needs api */}
      <Projects projects={topics}/>
      <Activities data={activites} />
      <Testimonials data={testimonials} />
      <Video data={{ platforms, video }} />
      <ProjectsInBrief data={briefProjects} />
      <Team data={team} />
      <Blog data={blogs} />
      {/* (5) addresses api missing flag */}
      <KeepInTouch data={addresses} />
    </HomePageLayout>
  )
}

/**
 * ! Slugs instead of ids
 * ! Sitemap
 * ! RSS Feed
 */
