export const getStyleVar = (str) => {
  return getComputedStyle(document.documentElement).getPropertyValue(str);
};
