import { STORE_KEY } from '@constants';
import global from '@main/global';

export const getMYSCookie = () => {
  return global.store.get(STORE_KEY.mysCookie);
};
