import React from 'react';

// import { useNavigate } from 'react-router-dom';

import IfElse from '@renderer/components/IfElse';
import { api } from '@renderer/utils';
import { toLocale } from '@utils';

import style from './index.module.less';

const UserButton = () => {
  const isLogin = false;

  // const navi = useNavigate();

  return (
    <div
      className={style.btn}
      onClick={() => {
        api.openLoginWindow();
      }}
    >
      <IfElse
        bool={isLogin}
        if={<span>uid</span>}
        else={<span>{toLocale('frame_header_userbtn_login')}</span>}
      />
    </div>
  );
};

export default UserButton;
