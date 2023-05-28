import Store from 'electron-store';

import global from '@main/global';

const SCHEMA = {};

const initStore = () => {
  global.store = new Store({ schema: SCHEMA });
};

export default initStore;
