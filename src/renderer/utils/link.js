import { generatePath } from 'react-router-dom';

export const openPage = ({ page, params, navigate }) => {
  const url = generatePath(page, params);

  if (navigate) {
    navigate(url);
  } else {
    window.location.href = `${window.location.pathname}#${url}`;
  }
};
