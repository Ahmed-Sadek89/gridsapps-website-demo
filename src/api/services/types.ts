import type { ITopic } from "@/types";

export interface SectionResponse {
  section_title?: string;
  topic: ITopic[];
}

export interface QuotePayload {
  api_key: number;
  order_name: string;
  order_email: string;
  order_phone: string;
  order_message: string;
  order_qty: number;
  topic_id: number;
}

export interface QuoteResponse {
  code: string;
  msg: string;
}