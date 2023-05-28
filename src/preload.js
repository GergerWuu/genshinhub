import { contextBridge, ipcRenderer } from 'electron';

import { EXPOSED_API_FROM_ELECTRON } from '@constants';

import IPC_EVENTS from './constants/ipcEvents';

const apis = {
  getAppInfo: () => {
    return ipcRenderer.invoke(IPC_EVENTS.getAppInfo);
  },
};

contextBridge.exposeInMainWorld(EXPOSED_API_FROM_ELECTRON, apis);
