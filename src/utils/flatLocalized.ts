export const flatLocalizedObject = <T extends Record<string, any>>(obj: T, options?: FlattenOptions) => {
  const localizedData = structuredClone(obj.localized);
  const data = structuredClone(obj);

  delete data.localized;

  for (const locale in localizedData) {
    const localeProps = localizedData[locale];

    Object.entries(localeProps).forEach(([key, value]) => {
      if (options?.deep && typeof value === 'object') {
        value && Object.entries(value).forEach(([ObjKey, ObjValue]) => {
          // @ts-ignore
          data[`${locale}[${key}][${ObjKey}]`] = ObjValue;
        })
      } else {
        // @ts-ignore
        data[`${locale}[${key}]`] = value;
      }
    })
  }

  return data;
}

export const flatLocalizedAsObject = <T extends Record<string, any>>(obj: T) => {
  const localizedData = structuredClone(obj.localized);
  const data = structuredClone(obj);

  delete data.localized;

  for (const locale in localizedData) {
    const localeProps = localizedData[locale];

    // @ts-ignore
    data[locale] = {};

    Object.entries(localeProps).forEach(([key, value]) => {
      // @ts-ignore
      data[locale][key] = value;
    })
  }

  return data;
}

export function flatLocalizedInDispatch(dataObject: Record<string, any>, languageCode: string, item: [string, any]) {
  return {
    localized: {
      ...dataObject.localized,
      [languageCode]: {
        ...dataObject.localized[languageCode],
        [item[0]]: item[1]
      }
    }
  }
}

type FlattenOptions = {
  deep?: boolean
}