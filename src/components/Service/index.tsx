import Info from './Info'
import Features from './Features'
import Details from './Details'
import Features2 from './Features2'
import Features3 from './Features3'
import ServiceVideo from './Video'
import Details2 from './Details2'
import FAQ from './FAQ'
import Testimonials from '@/components/Home/Testimonials'
import Video from '@/components/Home/Video'
import ServiceContact from './Contact'
import { SectionsResponse, SectionResponse, IContactData } from '@/types'
import cls from './wrapper.module.scss'
import { generateAllSectionData } from './get_section_data'

type Props = {
  serviceId: number
  data: {
    serviceDetails: SectionResponse | undefined
    faqs: SectionsResponse | undefined
    video: SectionsResponse | undefined
    testimonials: SectionsResponse | undefined
    contactData: IContactData | undefined
  }
}

export default function ServiceWrapper ({ serviceId, data }: Props) {
  const topic = data?.serviceDetails?.topic
    ? data?.serviceDetails?.topic[0]
    : null
  const title = topic?.title
  const details = topic?.details
  const fields = topic?.fields
  const sectionData = generateAllSectionData(fields)
  return (
    <div className={cls.wrapper}>
      <Info
        title={title as string}
        details={details as string}
        sec1_button_fields={sectionData.sec1_button}
      />
      <Features
        sec2_main={sectionData.sec2_main}
        sec2_items={sectionData.sec2_feature}
      />
      <Details sec3_main={sectionData.sec3_main} />
      <Features2 sec4_main={sectionData.sec4_main} />
      <Features3
        sec5_main={sectionData.sec5_main}
        sec5_main_button={sectionData.sec5_main_button}
        sec6_main={sectionData.sec6_main}
        sec6_main_line={sectionData.sec6_main_line}
      />
      <ServiceVideo
        sec7_main={sectionData.sec7_main}
        sec8_main={sectionData.sec8_main}
        sec8_main_line={sectionData.sec8_main_line}
      />
      <Details2 sec9_main={sectionData.sec9_main} />
      <FAQ
        // data={data?.faqs}
        sec10_main_faq={sectionData.sec10_main_faq}
        sec10_faq={sectionData.sec10_faq}
      />
      <Testimonials
        data={data.testimonials}
        sec11_testimonial_main={sectionData.sec11_testimonial_main}
        sec11_testimonial={sectionData.sec11_testimonial}
      />
      <Video
        data={{ platforms: undefined, video: data.video }}
        withoutNumbers
        sec12_why_main={sectionData.sec12_why_main}
      />
      <ServiceContact serviceId={serviceId} contactData={data?.contactData} />
    </div>
  )
}
