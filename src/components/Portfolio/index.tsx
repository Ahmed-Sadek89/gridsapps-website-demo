'use client';
import { useState, useEffect, useCallback } from 'react';
//= Components
import Filters from './Filters';
import ProjectsList from './ProjectsList';
import Testimonials from '@/components/Home/Testimonials';
import Video from '@/components/Home/Video';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Api
import { getMobileApps } from '@/api';
//= Types
import { ITopic, SectionsResponse } from '@/types';

type Props = {
  data: {
    webProjects: SectionsResponse | undefined;
    testimonials: SectionsResponse | undefined;
    video: SectionsResponse | undefined;
  }
}

export default function PortfolioWrapper({ data: { webProjects, testimonials, video } }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const [projectsList, setProjectsList] = useState(webProjects?.topics);
  const [mobileProjects, setMobileProjects] = useState<ITopic[]>([]);
  const [filter, setFilter] = useState('website');
  const [isLoading, setIsLoading] = useState(false);

  const refetchProjects = useCallback(async () => {
    setIsLoading(true);
    if (filter === 'website' || filter === 'desktop') {
      setProjectsList(webProjects?.topics);
    } else {
      if (!mobileProjects.length) {
        const response = await getMobileApps(locale);
        setMobileProjects(response?.topics ? response?.topics : []);
      }
    }
    setIsLoading(false);
  }, [filter, locale, webProjects?.topics, mobileProjects.length]);

  useEffect(() => {
    refetchProjects();
  }, [filter, refetchProjects])

  return (
    <>
      <div className='container'>
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <div className='container'>
        <ProjectsList filter={filter} isLoading={isLoading} projectsList={projectsList || []} mobileProjects={mobileProjects} />
      </div>
      <Testimonials data={testimonials} />
      <Video data={{ platforms: undefined, video }} withoutNumbers />
    </>
  )
}