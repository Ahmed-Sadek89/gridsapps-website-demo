'use client';
//= Components
import WebsiteProject from './WebsiteProject';
import MobileProject from './MobileProject';
//= Types
import { ITopic } from '@/types';
//= Styles
import cls from './projectsList.module.scss';
import LoadingSkeleton from '@/components/UIs/Skeleton';

type Props = {
  filter: string;
  isLoading: boolean;
  projectsList: ITopic[];
  mobileProjects: ITopic[];
}

export default function ProjectsList({ filter, isLoading, projectsList, mobileProjects }: Props) {
  return (
    <div className={cls.list}>
      {isLoading ?
        <>
          <LoadingSkeleton width='300px' height='300px' />
          <LoadingSkeleton width='300px' height='300px' />
          <LoadingSkeleton width='300px' height='300px' />
        </>
        :
        <>
          {filter === 'website' || filter === 'desktop' ?
            <>
              {projectsList.map((project, idx) => (
                <WebsiteProject key={idx} project={project} />
              ))}
            </>
            :
            <>
              {mobileProjects.map((project, idx) => (
                <MobileProject key={idx} project={project} />
              ))}
            </>
          }
        </>
      }

    </div>
  )
}