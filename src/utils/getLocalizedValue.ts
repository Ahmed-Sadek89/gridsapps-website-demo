interface LocalizedTranslation {
  locale: string;
}

export function getLocalizedValue<T extends LocalizedTranslation>(translations: T[], locale: string) {
  if (!translations) return {} as T;
  return translations?.find(translation => translation.locale === locale) || translations[0];
}