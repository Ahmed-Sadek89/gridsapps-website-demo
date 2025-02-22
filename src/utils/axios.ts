import axios from 'axios';

const isServer = typeof window === 'undefined';

async function createAxiosClient() {
  let locale = 'en';
  if (isServer) {
    const { cookies } = await (import('next/headers'));
    const savedLocale = cookies().get('gridsapps-locale')?.value;
    if (savedLocale) locale = savedLocale;
  } else {
    const savedLocale = document.cookie.replace(/(?:(?:^|.*;\s*)gridsapps-locale\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (savedLocale) locale = savedLocale;
  }

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-locale': locale.toLowerCase(),
      'Accept-Language': locale.toLowerCase(),
    }
  });

  return client;
}


async function createAxiosClientWithToken() {
  const client = await createAxiosClient();

  client.interceptors.request.use(async (config) => {
    if (isServer) {
      const { cookies } = (await import('next/headers'));
      const token = cookies().get('gridsapps-access-token')?.value;
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)gridsapps-access-token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return client;
}

export const clientWithToken = async () => await createAxiosClientWithToken();
export const clientNormal = async () => await createAxiosClient();