import crypto from 'node:crypto';

import { random, changeObjectToQS } from '@utils';

export const md5 = (value) => {
  return crypto.createHash('md5').update(value).digest('hex');
};

export const generateRandomStr = (length) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

  return new Array(length).fill().reduce((str) => {
    return `${str}${chars[random(0, chars.length - 1)]}`;
  }, '');
};

// ver 2.34.1
export function generateDS(query = '', body = '') {
  const params = {
    salt: 'xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs',
    t: String(Math.floor(Date.now() / 1000)),
    r: String(random(100000, 1000000)),
    b: body,
    q: query,
  };
  const DS = `${params.t},${params.r},${md5(changeObjectToQS(params))}`;
  return DS;
}
