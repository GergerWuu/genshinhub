import { contextBridge, ipcRenderer } from 'electron';

import { EXPOSED_API_FROM_ELECTRON } from '@constants';

import IPC_EVENTS from './constants/ipcEvents';

const apis = {
  getAppInfo: () => {
    return ipcRenderer.invoke(IPC_EVENTS.getAppInfo);
  },
  closeApp: () => {
    return ipcRenderer.send(IPC_EVENTS.closeApp);
  },
  minimizeWin: () => {
    return ipcRenderer.send(IPC_EVENTS.minimizeWin);
  },
};

contextBridge.exposeInMainWorld(EXPOSED_API_FROM_ELECTRON, apis);
