import Store from 'electron-store';

import { IPC_EVENTS, STORE_KEY } from '@constants';
import global from '@main/global';

const SCHEMA = {};

const initStore = () => {
  const store = new Store({ schema: SCHEMA });

  store.onDidChange(STORE_KEY.mysCookie, () => {
    global.mainWindow.webContents.send(
      IPC_EVENTS.mysCookieChange,
      global.store.get(STORE_KEY.mysCookie)
    );
  });

  global.store = store;
};

export default initStore;
