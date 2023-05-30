import { STORE_KEY, URL, GAME_BIZ, LINK_MYS_REFERER } from '@constants';
import global from '@main/global';
import { request } from '@main/utils';

export const getUserList = async () => {
  const params = { game_biz: GAME_BIZ };
  const headers = {
    referer: LINK_MYS_REFERER,
    cookie: global.store.get(STORE_KEY.mysCookie),
  };

  try {
    const { status, data } = await request.get(URL.getUserList, {
      params,
      headers,
    });

    if (status !== 200) {
      return Promise.reject(
        Error(`getDailyNote -> Request failed \n ${JSON.stringify(data)}`)
      );
    }

    return data;
  } catch (err) {
    return Promise.reject(Error(`getUserList -> Request failed \n ${err}`));
  }
};
