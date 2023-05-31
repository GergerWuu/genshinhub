import { BrowserWindow, shell } from 'electron';

import global from '@main/global';

import initIPC from './initIPC';
import initStore from './initStore';

const WINDOW_OPTIONS = {
  icon: '',
  width: 1128,
  height: 752,
  show: false,
  frame: false,
  resizable: false,
  maximizable: false,
  fullscreenable: false,
  webPreferences: {
    preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
  },
};

const initMainWIndow = () => {
  initStore();

  const mainWindow = new BrowserWindow(WINDOW_OPTIONS);

  mainWindow.removeMenu();
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Prevent right click
  mainWindow.once('system-context-menu', (e) => {
    return e.preventDefault();
  });

  // Process link, default to using an external browser to open (such as a link with target = '_blank')
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  if (global.appInfo.isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  initIPC();

  global.mainWindow = mainWindow;

  return mainWindow;
};

export default initMainWIndow;
