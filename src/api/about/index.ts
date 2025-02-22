import { cache } from 'react';
import API from "../request.handler";
//= Data
import { sections_ids } from '../section_ids';
//= Types
import type { SectionResponse } from './types';

export const getAboutData = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topics/${sections_ids.aboutUs}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getAboutHistory = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topics/${sections_ids.history}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});