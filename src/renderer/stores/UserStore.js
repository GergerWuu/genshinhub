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
    api.getUserList().then(({ retcode, message, data }) => {
      runInAction(() => {
        this.userList = data.list;
        this.currentUid = data?.list?.[0]?.game_uid; // todo filter is_chosen
      });
    });
  }

  get isLogin() {
    return !!this.currentUid;
  }

  get userObj() {
    const userObj = {};
    this.userList.forEach((user) => {
      userObj[user.game_uid] = user;
    });
    return userObj;
  }

  get currentUserInfo() {
    return this.userObj?.[this.currentUid] ?? {};
  }
}

export default UserStore;
