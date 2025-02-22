import API from "../request.handler";
//= Utils
import convertToFormData from "@/utils/convertToFormData";

export const sendContactMessage = async (payload: ContactMessagePayload) => {
  const response = await API.Post<unknown>(`/contact`, {
    withToken: true,
    formdata: convertToFormData(payload)
  });

  return response;
};

interface ContactMessagePayload {
  api_key: string;
  topic_id: string;
  company_name: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  contact_subject: string;
  contact_message: string;
}