import { makeAutoObservable } from 'mobx';

import { createStoreContext } from '@renderer/utils';

import DailyNoteStore from './DailyNoteStore';
import UserStore from './UserStore';

class Root {
  constructor() {
    makeAutoObservable(this);
    this.userStore = new UserStore(this);
    this.dailyNoteStore = new DailyNoteStore(this);
  }
}

const StoreContext = createStoreContext(Root);
export const StoreProvider = StoreContext.Provider;
export const withProvider = StoreContext.withProvider;
export const useStores = StoreContext.useStores;
