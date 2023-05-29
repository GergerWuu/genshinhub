import { makeAutoObservable, runInAction } from 'mobx';

import { api } from '@renderer/utils';

class UserStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  userList = [];
  currentUid = '';

  getUserList() {
    api.getUserList().then((list) => {
      runInAction(() => {
        this.userList = list;
        this.currentUid = list?.[0]?.game_uid;
      });
    });
  }

  get computedIsLogin() {
    return !!this.currentUid;
  }

  get computedUserObj() {
    const userObj = {};
    this.userList.forEach((user) => {
      userObj[user.game_uid] = user;
    });
    return userObj;
  }

  get computedCurrentUserInfo() {
    return this.computedUserObj?.[this.currentUid] ?? {};
  }
}

export default UserStore;
