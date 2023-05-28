import React from 'react';
import { createRoot } from 'react-dom/client';

import icon from '@assets/icon.png';
import { api } from '@renderer/utils';

import style from './index.less';

const render = () => {
  api.getAppInfo().then(({ name, version }) => {
    const root = createRoot(document.getElementById('app'));

    root.render(
      <h2 className={style.main}>
        <img className={style.icon} src={icon} />
        {name} {version}
      </h2>
    );
  });
};

render();
