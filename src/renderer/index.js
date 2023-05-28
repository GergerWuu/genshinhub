import React from 'react';
import { createRoot } from 'react-dom/client';

import { api } from '@renderer/utils';

import Router from './Router';
import WinFrame from './components/WinFrame';

import './index.less';

const render = () => {
  api.getAppInfo().then((info) => {
    const root = createRoot(document.getElementById('app'));

    root.render(
      <WinFrame {...info}>
        <Router />
      </WinFrame>
    );
  });
};

render();
