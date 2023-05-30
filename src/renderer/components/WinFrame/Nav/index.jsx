import React from 'react';
import { HiUserGroup, HiHome } from 'react-icons/hi2';

import PAGE_URL from '@constants/pageUrl';
import { toLocale } from '@utils';

import Button from './Button';
import style from './index.module.less';

const NAV_CONFIG = [
  {
    Icon: HiHome,
    text: toLocale('frame_nav_btn_home'),
    link: PAGE_URL.home,
  },
  {
    Icon: HiUserGroup,
    text: toLocale('frame_nav_btn_roles'),
    link: PAGE_URL.roles,
    pages: [PAGE_URL.roles],
  },
];

const Nav = () => {
  return (
    <nav className={style.nav}>
      {NAV_CONFIG.map((item, index) => {
        return <Button className={style.btn} key={index} {...item} />;
      })}
    </nav>
  );
};

export default Nav;
