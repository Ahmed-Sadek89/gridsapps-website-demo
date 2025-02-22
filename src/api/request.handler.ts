import { AxiosRequestConfig, AxiosResponse } from 'axios';
//= Axios Util
import { clientWithToken, clientNormal } from '@/utils/axios';
//= Toasts
import { toast } from 'sonner';

interface Options {
  config?: AxiosRequestConfig;
  body?: any;
  formdata?: FormData;
  withToken?: boolean;
  disableErrorMessage?: boolean;
}

export interface Response<T> {
  msg: string;
  [key: string]: any;
}

class API_HANDLER {
  public async Get<T>(endpoint: string, options?: Options): Promise<T | undefined> {
    const config = options?.config || {};

    try {
      const response = await (options?.withToken ? await clientWithToken() : await clientNormal()).get<T>(endpoint, config);
      if (!options?.disableErrorMessage) handleShowErrorMessage<T>(response);
      return response.data;
    } catch (err: any) {
      if (options?.disableErrorMessage) return;
      showCatchErrorMessage(err);
    }
  }

  public async Post<T>(endpoint: string, options: Options): Promise<T | undefined | null> {
    const config = options?.config;
    const body = options?.formdata ? options?.formdata : options?.body || {};

    let optionalHeaders = {}
    if (options?.formdata) {
      optionalHeaders = { 'Content-Type': 'multipart/form-data' }
    }

    try {
      const response = await (options?.withToken ? await clientWithToken() : await clientNormal()).post<T>(endpoint, body, { ...config, headers: { ...config?.headers, ...optionalHeaders } });
      if (!options?.disableErrorMessage) handleShowErrorMessage<T>(response);
      return response.data;
    } catch (err: any) {
      if (options?.disableErrorMessage) return;
      showCatchErrorMessage(err);
    }
  }

  public async Patch<T>(endpoint: string, options: Options): Promise<Response<T> | T | undefined> {
    const config = options?.config || {};
    const body = options?.formdata ? options?.formdata : options?.body || {};

    let optionalHeaders = {}
    if (options?.formdata) {
      optionalHeaders = { 'Content-Type': 'multipart/form-data' }
    }

    try {
      const response = await (options?.withToken ? await clientWithToken() : await clientNormal()).patch<T>(endpoint, body, { ...config, headers: { ...config?.headers, ...optionalHeaders } });
      if (!options?.disableErrorMessage) handleShowErrorMessage<T>(response);
      return response.data;
    } catch (err: any) {
      if (options?.disableErrorMessage) return;
      showCatchErrorMessage(err);
    }
  }

  public async Put<T>(endpoint: string, options: Options): Promise<Response<T> | T | undefined> {
    const config = options?.config || {};
    const body = options?.formdata ? options?.formdata : options?.body || {};

    let optionalHeaders = {}
    if (options?.formdata) {
      optionalHeaders = { 'Content-Type': 'multipart/form-data' }
    }

    try {
      const response = await (options?.withToken ? await clientWithToken() : await clientNormal()).patch<T>(endpoint, body, { ...config, headers: { ...config?.headers, ...optionalHeaders } });
      if (!options?.disableErrorMessage) handleShowErrorMessage<T>(response);
      return response.data;
    } catch (err: any) {
      if (options?.disableErrorMessage) return;
      showCatchErrorMessage(err);
    }
  }

  public async Delete<T>(endpoint: string, options?: Options): Promise<T | undefined> {
    const config = options?.config || {};
    const body = options?.formdata ? options?.formdata : options?.body || {};

    try {
      const response = await (options?.withToken ? await clientWithToken() : await clientNormal()).delete<T>(endpoint, { ...config, data: body });
      if (!options?.disableErrorMessage) handleShowErrorMessage<T>(response);
      return response.data;
    } catch (err: any) {
      if (options?.disableErrorMessage) return;
      showCatchErrorMessage(err);
    }
  }
}


function handleShowErrorMessage<T>(response: AxiosResponse<T, any>) {
  if (response.data && typeof response.data === 'object' && 'success' in response.data && response.data.success === false) {
    // @ts-ignore
    if (Object.values(response?.data.data).length) {
      // @ts-ignore
      Object.values(response?.data.data).forEach((error: any) => {
        toast.error(error[0])
      });
      // @ts-ignore
    } else if ('message' in response.data) toast.error(response.data.data.message as string)
  }
}

function showCatchErrorMessage(err: any) {
  // @ts-ignore
  const message = err?.response?.data?.errors ?
    // @ts-ignore
    Object.values(err?.response?.data?.errors)[0][0] :
    err.response?.data?.message ?
      err.response?.data?.message
      :
      undefined;

  if (message && typeof window !== 'undefined') {
    toast.error(message);
  } else {
    typeof window === 'undefined' ?
      console.log(err?.response?.data?.error || err.message)
      :
      toast.error(err?.response?.data?.error || err.message)
  }
}

const api = new API_HANDLER();

export default api;