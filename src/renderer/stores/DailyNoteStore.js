import { makeAutoObservable, runInAction } from 'mobx';

import { api } from '@renderer/utils';

class DailyNoteStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);

    setInterval(() => {
      runInAction(() => {
        this.currentTime = new Date().getTime();
      });
    }, 1000);
  }

  currentTime = new Date().getTime();

  dailyNote = {};
  dailyNoteUpdateTime = new Date().getTime();

  getDailyNote() {
    const { retcode, data } = {
      retcode: 0,
      message: 'OK',
      data: {
        current_resin: 112,
        max_resin: 160,
        resin_recovery_time: '23040',
        finished_task_num: 4,
        total_task_num: 4,
        is_extra_task_reward_received: true,
        remain_resin_discount_num: 2,
        resin_discount_num_limit: 3,
        current_expedition_num: 0,
        max_expedition_num: 5,
        expeditions: [],
        current_home_coin: 2400,
        max_home_coin: 2400,
        home_coin_recovery_time: '0',
        calendar_url: '',
        transformer: {
          obtained: true,
          recovery_time: {
            Day: 0,
            Hour: 0,
            Minute: 0,
            Second: 0,
            reached: true,
          },
          wiki: 'https://bbs.mihoyo.com/ys/obc/content/1562/detail?bbs_presentation_style=no_header',
          noticed: false,
          latest_job_id: '0',
        },
      },
    };

    if (retcode === 0) {
      runInAction(() => {
        this.dailyNote = data;
        this.dailyNoteUpdateTime = new Date().getTime();
      });
    }

    /* const uid = this.root.userStore.currentUid;
    api.getDailyNote(uid).then(({ retcode, message, data }) => {
      runInAction(() => {
        if (retcode === 0) {
          runInAction(() => {
            this.dailyNote = data;
          });
        }

        if (retcode === 1034) {
          // meet captcha
        }
      });
    }); */
  }

  clearDailyNote() {
    this.dailyNote = null;
  }

  get hasLoadDailyNote() {
    return this.root.userStore.isLogin && Object.keys(this.dailyNote).length;
  }

  get computedCurrentResin() {
    if (this.dailyNote.max_resin === this.dailyNote.current_resin) {
      return this.dailyNote.current_resin;
    }

    const recoveryDuration =
      this.dailyNote.resin_recovery_time /
      (this.dailyNote.max_resin - this.dailyNote.current_resin);

    const increased = Math.floor(
      (this.currentTime - this.dailyNoteUpdateTime) / 1000 / recoveryDuration
    );

    return Math.min(
      increased + this.dailyNote.current_resin,
      this.dailyNote.max_resin
    );
  }

  get computedResinRecoveryTime() {
    return this.dailyNoteUpdateTime + this.dailyNote.resin_recovery_time * 1000;
  }

  get computedCurrentHomeCoin() {
    if (this.dailyNote.max_home_coin === this.dailyNote.current_home_coin) {
      return this.dailyNote.current_home_coin;
    }

    const recoveryDuration =
      this.dailyNote.home_coin_recovery_time /
      (this.dailyNote.max_home_coin - this.dailyNote.current_home_coin);

    const increased = Math.floor(
      (this.currentTime - this.dailyNoteUpdateTime) / 1000 / recoveryDuration
    );

    return Math.min(
      increased + this.dailyNote.current_home_coin,
      this.dailyNote.max_home_coin
    );
  }

  get computeHomeCoinRecoveryTime() {
    return (
      this.dailyNoteUpdateTime + this.dailyNote.home_coin_recovery_time * 1000
    );
  }
}

export default DailyNoteStore;
