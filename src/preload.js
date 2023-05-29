import { contextBridge, ipcRenderer } from 'electron';

import { IPC_EVENTS, EXPOSED_API_FROM_ELECTRON } from '@constants';

const apis = {
  getAppInfo: () => {
    return ipcRenderer.invoke(IPC_EVENTS.getAppInfo);
  },
  getMYSCookie: () => {
    return ipcRenderer.invoke(IPC_EVENTS.getMYSCookie);
  },

  closeApp: () => {
    return ipcRenderer.send(IPC_EVENTS.closeApp);
  },
  minimizeWin: () => {
    return ipcRenderer.send(IPC_EVENTS.minimizeWin);
  },
  openLoginWindow: () => {
    return ipcRenderer.send(IPC_EVENTS.openLoginWindow);
  },

  onMYSCookieChange: (fn) => {
    return ipcRenderer.on(IPC_EVENTS.mysCookieChange, (event, message) => {
      return fn(message);
    });
  },
};

contextBridge.exposeInMainWorld(EXPOSED_API_FROM_ELECTRON, apis);
