import React from 'react';
import { createRoot } from 'react-dom/client';

import { WinFrame } from '@renderer/components';
import { MainStoreProvider } from '@renderer/context/MainStoreContext';
import { api } from '@renderer/utils';

import Router from './Router';

import './index.less';

const render = () => {
  api.getAppInfo().then((info) => {
    const root = createRoot(document.getElementById('app'));

    root.render(
      <MainStoreProvider>
        <WinFrame {...info}>
          <Router />
        </WinFrame>
      </MainStoreProvider>
    );
  });
};

render();
