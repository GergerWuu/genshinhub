import { app } from 'electron';

import global from '@main/global';

export const getAppInfo = () => {
  return global.appInfo;
};

export const closeApp = () => {
  return app.exit(0);
};
