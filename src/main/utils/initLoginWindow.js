import { BrowserWindow, session } from 'electron';

import { LINK_MYS_LOGIN, STORE_KEY, UA_MOBILE } from '@constants';
import global from '@main/global';
import { changeCookiesToString, checkCookies } from '@utils';

const initLoginWindow = () => {
  const loginWindow = new BrowserWindow({
    width: 375,
    height: 667,
    show: true,
    parent: global.mainWindow,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
  });

  loginWindow.removeMenu();

  const { webContents } = loginWindow;
  // prevent open new window
  webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });
  webContents.setUserAgent(UA_MOBILE);
  webContents.loadURL(LINK_MYS_LOGIN);

  loginWindow.on('close', async () => {
    session.defaultSession.cookies.get({}).then((cookies) => {
      if (checkCookies(cookies)) {
        global.store.set(STORE_KEY.mysCookie, changeCookiesToString(cookies));
      }
    });
  });
};

export default initLoginWindow;
