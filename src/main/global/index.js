import { app } from 'electron';

import { toLocale } from '@utils';

const global = {
  appInfo: {
    name: toLocale('app_name'),
    version: app.getVersion(),
    isBeta: true,
    isDev: !app.isPackaged,
    isWindowsDevice: process.platform === 'win32',
    isAppleDevice: process.platform === 'darwin',
  },
  store: null,
  mainWindow: null,
};

export default global;
