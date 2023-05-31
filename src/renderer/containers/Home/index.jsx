import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@renderer/stores';

import Expedition from './Expedition';
import HomeCoin from './HomeCoin';
import Info from './Info';
import Resin from './Resin';
import ResinDiscount from './ResinDiscount';
import Roles from './Roles';
import Task from './Task';
import Transformer from './Transformer';
import style from './index.module.less';

const Home = () => {
  const { userStore, dailyNoteStore } = useStores();
  const { currentUid } = userStore;
  const { hasLoadDailyNote } = dailyNoteStore;

  useEffect(() => {
    if (currentUid && !hasLoadDailyNote) {
      dailyNoteStore.getDailyNote();
    }
  }, [dailyNoteStore, hasLoadDailyNote, currentUid]);

  return (
    <main className={style.home}>
      <Info className={style.info} />
      <Roles className={style.roles} />
      <Task className={style.task} />
      <Expedition className={style.expedition} />
      <ResinDiscount className={style.resinDiscount} />
      <Resin className={style.resin} />
      <HomeCoin className={style.homeCoin} />
      <Transformer className={style.transformer} />
    </main>
  );
};

export default observer(Home);
