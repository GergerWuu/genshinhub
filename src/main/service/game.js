import { URL, STORE_KEY, LINK_MYS_REFERER } from '@constants';
import global from '@main/global';
import { request, generateDS } from '@main/utils';
import { getServerByUid, changeObjectToQS } from '@utils';

export const getDailyNote = async (uid) => {
  const cookie = global.store.get(STORE_KEY.mysCookie);
  const params = { role_id: uid, server: getServerByUid(uid) };
  const headers = {
    referer: LINK_MYS_REFERER,
    cookie,
    DS: generateDS(changeObjectToQS(params)),
  };

  try {
    const { status, data } = await request.get(URL.getDailyNote, {
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
    return Promise.reject(Error(`getDailyNote -> Request failed \n ${err}`));
  }
};
