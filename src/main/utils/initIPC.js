import { ipcMain } from 'electron';

import IPC_EVENTS from '@constants/ipcEvents';
import {
  closeApp,
  getAppInfo,
  minimizeWin,
  openLoginWindow,
  getMYSCookie,
} from '@main/ipc';

const initIPC = () => {
  ipcMain.on(IPC_EVENTS.closeApp, closeApp);
  ipcMain.on(IPC_EVENTS.minimizeWin, minimizeWin);
  ipcMain.on(IPC_EVENTS.openLoginWindow, openLoginWindow);

  ipcMain.handle(IPC_EVENTS.getAppInfo, getAppInfo);
  ipcMain.handle(IPC_EVENTS.getMYSCookie, getMYSCookie);
};

export default initIPC;
