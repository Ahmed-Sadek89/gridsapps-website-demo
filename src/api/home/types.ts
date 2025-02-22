export interface SectionsResponse {
  section_title?: string;
  topics?: ITopic[]
}

export interface ITopic_field {
  type:string,
  title: string,
  value: string
}

export interface ITopic {
  id: number;
  title: string;
  details: string;
  date: string;
  video_type: string | null;
  video_file: string;
  photo_file: string | null;
  audio_file: string | null;
  icon: string | null;
  visits: string;
  href: string;
  fields_count: number;
  fields: ITopic_field[];
  Joined_categories_count: number;
  Joined_categories: any[];
  user: {
    id: number;
    name: string;
    href: string;
  };
}

export interface IWebsiteSocial {
  facebook: string;
  twitter: string;
  google: null;
  linkedin: string;
  youtube: string;
  instagram: string;
  pinterest: string;
  tumblr: string;
  flickr: string;
  whatsapp: string;
}

export interface IWebsiteMetadata {
  site_url: string;
  site_title: string;
  site_desc: string;
  site_keywords: string;
  site_webmails: string;
}

export interface IContactData {
  address: string;
  phone: string;
  fax: string;
  mobile: string;
  email: string;
  working_time: string;
}
