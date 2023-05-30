import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@renderer/stores';

const Home = () => {
  const { userStore, dailyNoteStore } = useStores();
  const { currentUid } = userStore;
  const { hasLoadDailyNote, dailyNote } = dailyNoteStore;

  useEffect(() => {
    if (currentUid && !hasLoadDailyNote) {
      dailyNoteStore.getDailyNote();
    }
  }, [dailyNoteStore, hasLoadDailyNote, currentUid]);

  return (
    <section>
      <ul>
        {Object.entries(dailyNote).map(([key, value]) => {
          return (
            <li style={{ display: 'flex' }} key={key}>
              <div style={{ width: 300 }}>{key}</div>
              <div>{JSON.stringify(value)}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default observer(Home);
