import { ipcMain } from 'electron';

import IPC_EVENTS from '@src/constants/ipcEvents';
import { getAppInfo } from '@main/ipc';

const initIPC = () => {
  ipcMain.handle(IPC_EVENTS.getAppInfo, getAppInfo);
};

export default initIPC;
