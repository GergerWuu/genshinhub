import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { AiOutlineUser } from 'react-icons/ai';

import IfElse from '@renderer/components/IfElse';
import { useStores } from '@renderer/stores';
import { api } from '@renderer/utils';
import { toLocale } from '@utils';

import style from './index.module.less';

const UserButton = () => {
  const { userStore } = useStores();
  const { currentUid, computedIsLogin } = userStore;

  // const navi = useNavigate();

  return (
    <div
      className={style.btn}
      onClick={() => {
        api.openLoginWindow();
      }}
    >
      <IfElse
        bool={computedIsLogin}
        if={
          <div className={style.uidContainer}>
            <AiOutlineUser className={style.icon} />
            <span>{currentUid}</span>
          </div>
        }
        else={<span>{toLocale('frame_header_userbtn_login')}</span>}
      />
    </div>
  );
};

export default observer(UserButton);
