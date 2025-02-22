import { cache } from 'react';
import API from "../request.handler";
//= Data
import { sections_ids } from '../section_ids';
//= Utils
import convertToFormData from '@/utils/convertToFormData';
//= Types
import type { SectionResponse, QuotePayload, QuoteResponse } from './types';

export const getServiceDetails = cache(async (locale: string, serviceId: number) => {
  const response = await API.Get<SectionResponse>(`/topic/${serviceId}/${locale}`, {
    withToken: true
  });

  return response;
});

export const sendQuote = async (payload: QuotePayload) => {
  const response = await API.Post<QuoteResponse>(`/order`, {
    withToken: true,
    formdata: convertToFormData(payload)
  });

  return response;
};