import { STORE_KEY, URL, GAME_BIZ, LINK_MYS_REFERER } from '@constants';
import global from '@main/global';
import { request } from '@main/utils';

export const getUserList = () => {
  const config = {
    params: { game_biz: GAME_BIZ },
    headers: {
      referer: LINK_MYS_REFERER,
      cookie: global.store.get(STORE_KEY.mysCookie),
    },
  };

  return request
    .get(URL.getUserList, config)
    .then((res) => {
      return res?.data?.data?.list;
    })
    .catch((err) => {
      console.error('getUserList err', err);
    });
};
