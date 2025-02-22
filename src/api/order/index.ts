import API, { type Response } from "../request.handler";

export const sendOrder = async (payload: SendOrderPayload) => {
  const response = await API.Post<Response<{ path: string; }>>(`/order`, {
    withToken: true,
    body: {
      api_key: '402784613679330',
      topic_id: payload.package,
      order_name: payload.name,
      order_phone: payload.phone,
      order_country: payload.country,
      order_email: payload.email,
      order_message: payload.message,
    }
  });

  if (response && response.data) return response;
};

interface SendOrderPayload {
  name: string;
  phone: string;
  email: string;
  country: string;
  package: string;
  message: string;
}