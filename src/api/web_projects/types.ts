export interface TopicField {
  type: string;
  title: string;
  value: string;
}

export interface User {
  id: number;
  name: string;
  href: string;
}

export interface Topic {
  id: number;
  title: string;
  details: string;
  date: string;
  video_type: string | null;
  video_file: string;
  photo_file: string;
  audio_file: string | null;
  icon: string | null;
  visits: string;
  href: string;
  fields_count: number;
  fields: TopicField[];
  Joined_categories_count: number;
  Joined_categories: any[]; // You can define a more specific type if needed
  user: User;
}

export interface WebProjectResponse {
  msg: string;
  section_id: string;
  section_title: string;
  type: string;
  topics_count: number;
  topics: Topic[];
}
