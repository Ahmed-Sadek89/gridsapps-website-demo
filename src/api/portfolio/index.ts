import { cache } from 'react';
import API from "../request.handler";
//= Data
import { sections_ids } from '../section_ids';
//= Types
import type { SectionResponse } from './types';

export const getWebProjects = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topics/${sections_ids.webProjects}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getMobileApps = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topics/${sections_ids.mobProjects}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});