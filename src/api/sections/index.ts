import { cache } from 'react';
import API, { type Response } from "../request.handler";
//= Data
import { sections_ids } from '../section_ids';
//= Types
import type { SectionResponse } from './types';
import type { SectionsResponse } from '@/types'

export const getPlatforms = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.platforms}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getTeam = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.teamMembers}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getTestimonials = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.testimonials}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getBlogs = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.blogsList}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getBlogById = cache(async (id: number | string, locale: string) => {
  const response = await API.Get<SectionResponse>(`/topic/${id}/${locale}`, {
    withToken: true
  });

  if (response) return response.topic[0];
});

export const getPackages = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.packages}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getFAQs = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.faqs}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getVideo = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.faqsVideo}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getAddresses = cache(async (locale: string) => {
  const response = await API.Get<SectionsResponse>(`/topics/${sections_ids.addresses}/page/${1}/count/${50}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getPrivacy = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topic/${3}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getRefund = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topic/${322}/${locale}`, {
    withToken: true
  });

  return response;
});

export const getTerms = cache(async (locale: string) => {
  const response = await API.Get<SectionResponse>(`/topic/${4}/${locale}`, {
    withToken: true
  });

  return response;
});