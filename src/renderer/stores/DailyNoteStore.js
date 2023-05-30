import { makeAutoObservable, runInAction } from 'mobx';

import { api } from '@renderer/utils';

class DailyNoteStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  dailyNote = {};

  getDailyNote() {
    const uid = this.root.userStore.currentUid;
    api.getDailyNote(uid).then(({ retcode, message, data }) => {
      runInAction(() => {
        if (retcode === 0) {
          runInAction(() => {
            this.dailyNote = data;
          }, []);
        }

        if (retcode === 1034) {
          // meet captcha
        }
      });
    });
  }

  clearDailyNote() {
    this.dailyNote = null;
  }

  get hasLoadDailyNote() {
    return this.root.userStore.isLogin && Object.keys(this.dailyNote).length;
  }
}

export default DailyNoteStore;
