export default function getImageUrl(src: string | null | undefined, isShort?: boolean) {
  if (!src || typeof src !== 'string') return '';
  const baseUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

  if (!baseUrl) {
    if (src === null || src === undefined) return ''
  } else {
    if (src === null || src === undefined) return baseUrl;
  }

  if (src.startsWith('https://')) return src;
  else {
    if (src.startsWith('/storage')) return (baseUrl + src).replace('/storage', '')
    return baseUrl + src
  }
}