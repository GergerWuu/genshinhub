import { ipcMain } from 'electron';

import IPC_EVENTS from '@src/constants/ipcEvents';
import { closeApp, getAppInfo, minimizeWin } from '@main/ipc';

const initIPC = () => {
  ipcMain.on(IPC_EVENTS.closeApp, closeApp);
  ipcMain.on(IPC_EVENTS.minimizeWin, minimizeWin);

  ipcMain.handle(IPC_EVENTS.getAppInfo, getAppInfo);
};

export default initIPC;
