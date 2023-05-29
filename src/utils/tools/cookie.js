export const changeCookiesToString = (cookie) => {
  return cookie
    .reduce((str, item) => {
      return `${str}${item.name}=${item.value};`;
    }, '')
    .trim();
};

export const checkCookies = (cookies) => {
  const cookie = changeCookiesToString(cookies);
  return cookie.includes('ltoken');
};
