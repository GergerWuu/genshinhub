import React from 'react';

// import { PAGE_URL } from '@constants';
import IfElse from '@renderer/components/IfElse';
import { api } from '@renderer/utils';
// import { openPage } from '@renderer/utils/link';
import { toLocale } from '@utils';

import style from './index.module.less';

const UserButton = () => {
  const isLogin = false;

  return (
    <div
      className={style.btn}
      onClick={() => {
        // openPage({ page: PAGE_URL.login });
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
