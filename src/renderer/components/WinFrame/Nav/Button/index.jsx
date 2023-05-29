import React, { useCallback, useMemo } from 'react';
import { useLocation, useNavigate, matchPath } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PAGE_URL from '@constants/pageUrl';

import style from './index.module.less';

const Button = ({ className, Icon, text, link, pages }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isCurrentPage = useMemo(() => {
    return [link, ...pages].some((page) => {
      return !!matchPath(pathname, page);
    });
  }, [pathname, link, pages]);

  const onClick = useCallback(() => {
    navigate(link);
  }, [navigate, link]);

  return (
    <div
      className={classNames(
        style.btn,
        { [style.focus]: isCurrentPage },
        className
      )}
      onClick={onClick}
    >
      <Icon className={style.icon} />
      <span className={style.text}>{text}</span>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.oneOf(Object.values(PAGE_URL)).isRequired,
  pages: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PAGE_URL))),
};

Button.defaultProps = {
  className: '',
  pages: [],
};

export default Button;
