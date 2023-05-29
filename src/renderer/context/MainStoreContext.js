import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useStores } from '@renderer/stores';
import { api } from '@renderer/utils';

export const MainStoreContext = createContext();

export const MainStoreProvider = ({ children }) => {
  const [cookie, setCookie] = useState('');
  const { userStore } = useStores();

  useEffect(() => {
    if (cookie) {
      userStore.getUserList(cookie);
    }
  }, [userStore, cookie]);

  useEffect(() => {
    api.getMYSCookie().then(setCookie);
    api.onMYSCookieChange((newCookie) => {
      setCookie(newCookie);
    });
  }, []);

  const value = useMemo(() => {
    return { cookie };
  }, [cookie]);

  return (
    <MainStoreContext.Provider value={value}>
      {children}
    </MainStoreContext.Provider>
  );
};

export const useMainStore = () => {
  return useContext(MainStoreContext);
};
