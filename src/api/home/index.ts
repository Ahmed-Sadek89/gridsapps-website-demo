import { cache } from 'react';
import API, { type Response } from "../request.handler";
//= Data
import { sections_ids } from '../section_ids';
//= Types
import type { IContactData, IWebsiteMetadata, IWebsiteSocial, SectionsResponse } from './types';

export const getAllSections = cache(async (locale: string) => {
  const all_sections_ids = [
    sections_ids.mainSlider,
    sections_ids.servicesList,
    sections_ids.solutions,
    sections_ids.steps,
    sections_ids.projects,
    sections_ids.samples,
    sections_ids.pwaFeatures,
    sections_ids.testimonials,
    sections_ids.faqsVideo,
    sections_ids.platforms,
    sections_ids.priefProjects,
    sections_ids.teamMembers,
    sections_ids.addresses,
    sections_ids.blogsList,
  ]

  const getSectionsData = async (id: number) => {
    const response = await API.Get<SectionsResponse>(`/topics/${id}/page/${1}/count/${50}/${locale}`, {
      withToken: true
    });

    return response;
  }

  const sections_data = await Promise.all([...all_sections_ids.map(link => getSectionsData(link))]);

  const services = sections_data.find(s => s?.section_title === 'Services' || s?.section_title === 'الخدمات') || { topics: [] };
  const solutions = sections_data.find(s => s?.section_title === 'solutions') || { topics: [] };
  const steps = sections_data.find(s => s?.section_title === 'steps') || { topics: [] };
  const projects = sections_data.find(s => s?.section_title === 'Projects') || { topics: [] }
  const samples = sections_data.find(s => s?.section_title === 'Circle Projects') || [];
  const platforms = sections_data.find(s => s?.section_title === 'Platforms') || { topics: [] };
  const video = sections_data.find(s => s?.section_title === 'Faqs Video') || { topics: [] };
  const briefProjects = sections_data.find(s => s?.section_title === 'Prief Projects') || { topics: [] };
  const testimonials = sections_data.find(s => s?.section_title === 'Testimonials') || { topics: [] };
  const activites = sections_data.find(s => s?.section_title === 'PWAFeatures') || { topics: [] };
  const team = sections_data.find(s => s?.section_title === 'Team') || { topics: [] };
  const blogs = sections_data.find(s => s?.section_title === 'Blog' || s?.section_title === 'المدونة')?.topics?.reverse() || [];
  const addresses = sections_data.find(s => s?.section_title === 'address') || { topics: [] };

  return {
    mainSlider: sections_data.find(s => s?.section_title === 'Main Slider' || s?.section_title === 'السلايدر الرئيسي') || [],
    services,
    solutions,
    steps,
    projects,
    samples,
    activites,
    testimonials,
    platforms,
    video,
    briefProjects,
    team,
    blogs,
    addresses
  };
});

export const getSocialLinks = cache(async () => {
  const response = await API.Get<{ details: IWebsiteSocial }>(`/website/social`, {
    withToken: true
  });

  if (response) return response.details;
});

export const getSiteMetadata = cache(async (locale: string) => {
  const response = await API.Get<{ details: IWebsiteMetadata }>(`website/info/${locale}`, {
    withToken: true
  });

  if (response) return response.details;
});

export const getContactData = cache(async (locale: string) => {
  const response = await API.Get<{ details: IContactData }>(`website/contacts/${locale}`, {
    withToken: true
  });

  if (response) return response.details;
});