import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@renderer/stores';

const Home = () => {
  const { userStore } = useStores();
  const { computedCurrentUserInfo } = userStore;

  return (
    <section>
      <ul>
        {Object.keys(computedCurrentUserInfo).map((key) => {
          return (
            <li style={{ display: 'flex' }} key={key}>
              <div>{key}</div>
              <div>{computedCurrentUserInfo[key]}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default observer(Home);
