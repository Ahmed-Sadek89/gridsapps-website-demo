import { ITopic_field } from '@/types'

const sectionNames = [
  'sec1_button',
  'sec2_main',
  'sec2_feature',
  'sec3_main',
  'sec4_main',

  'sec5_main',
  'sec5_main_button',
  'sec6_main',
  'sec6_main_line',

  'sec7_main',
  'sec8_main',
  'sec8_main_line',

  'sec9_main',

  'sec10_main_faq',
  'sec10_faq',
  'sec11_testimonial_main',
  'sec11_testimonial',

  'sec12_why_main'
]

export const getSectionData = (
  fields: ITopic_field[] | undefined,
  section_name: string
) => {
  return fields?.filter(item => item.title.includes(section_name))
}

export const generateAllSectionData = (fields: ITopic_field[] | undefined) => {
  return sectionNames.reduce((acc, section) => {
    acc[section] = getSectionData(fields, section)
    return acc
  }, {} as Record<string, ReturnType<typeof getSectionData>>)
}

export const generateMainSectionData = (fields: ITopic_field[] | undefined) => {
  const res = { title: '', description: '', image: '', video: '' }
  fields?.map(item => {
    if (item.title.includes('title')) {
      res.title = item.value || 'section title'
    }
    if (item.title.includes('description')) {
      res.description = item.value || 'section description'
    }
    if (item.title.includes('image')) {
      res.image = item.value || ''
    }
    if (item.title.includes('video')) {
      res.video = item.value || ''
    }
  })
  return res
}

export const generateItemsSectionData = (
  fields: ITopic_field[] | undefined
) => {
  if (!fields) return []

  const featureMap: Record<
    number,
    { title?: string; description?: string; image?: string; job?: string }
  > = {}

  fields.forEach(({ title, value }) => {
    const match = title.match(
      /sec\d+_(feature|faq|testimonial)(\d+)_(title|description|image|job)/
    )
    if (match) {
      const index = Number(match[2]) // Extract the numeric index
      const key = match[3] as 'title' | 'description' | 'image' | 'job' // Extract the field type

      if (!featureMap[index]) {
        featureMap[index] = { title: '', description: '', image: '', job: '' }
      }

      featureMap[index][key] = value
    }
  })

  return Object.values(featureMap)
}
