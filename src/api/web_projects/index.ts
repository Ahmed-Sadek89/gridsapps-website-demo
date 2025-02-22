import { cache } from 'react'
import API from '../request.handler'
import { WebProjectResponse } from './types'

export const getWebProjects = cache(
  async (locale: string, section_id: number) => {
    const response = await API.Get<WebProjectResponse>(
      `/topics/${section_id}/page/1/count/50/${locale}`,
      {
        withToken: true
      }
    )

    return response
  }
)
