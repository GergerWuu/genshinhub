import { makeAutoObservable } from 'mobx';

import { createStoreContext } from '@renderer/utils';

import UserStore from './UserStore';

class Root {
  constructor() {
    makeAutoObservable(this);
    this.userStore = new UserStore(this);
  }
}

const StoreContext = createStoreContext(Root);
export const StoreProvider = StoreContext.Provider;
export const withProvider = StoreContext.withProvider;
export const useStores = StoreContext.useStores;
