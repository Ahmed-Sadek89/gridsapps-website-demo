import type { ITopic } from "@/types";

export interface SectionResponse {
  section_title?: string;
  topics: ITopic[];
}