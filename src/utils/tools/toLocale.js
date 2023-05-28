import locales from '@locales';

import { TYPES, is } from './types';

export const toLocale = (key, params) => {
  const template = locales?.[key] ?? '';

  if (is(params, TYPES.Object)) {
    return Object.keys(params).reduce((text, p) => {
      return text.replaceAll(`{${p}}`, params[p]);
    }, template);
  }

  return template;
};
