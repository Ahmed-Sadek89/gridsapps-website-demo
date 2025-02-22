//= Components
import AboutGallery from './AboutGallery';
import Statistics from './Statistics';
import Details from './Details';
import Process from './Process';
import Team from '../Home/Team';
import Testimonials from '@/components/Home/Testimonials';
import Video from '@/components/Home/Video';
//= Types
import { SectionsResponse } from '@/types';
//= Styles
import cls from './wrapper.module.scss';

type Props = {
  data: {
    aboutData: SectionsResponse | undefined;
    aboutHistory: SectionsResponse | undefined;
    platforms: SectionsResponse | undefined;
    video: SectionsResponse | undefined;
    team: SectionsResponse | undefined;
    testimonials: SectionsResponse | undefined;
  }
}

export default function AboutWrapper({ data }: Props) {
  return (
    <div className={cls.wrapper}>
      <AboutGallery />
      <Statistics data={data?.aboutData?.topics && data?.aboutData?.topics[0]} />
      <Details data={data?.aboutData?.topics && data?.aboutData?.topics[0]} />
      <Process data={data?.aboutHistory?.topics ? data?.aboutHistory?.topics : []} />
      <Team data={data.team} />
      <Testimonials data={data.testimonials} />
      <Video data={{ platforms: undefined, video: data.video }} withoutNumbers />
    </div>
  )
}