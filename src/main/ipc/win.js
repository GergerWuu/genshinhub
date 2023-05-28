import global from '@main/global';

export const minimizeWin = () => {
  const win = global.mainWindow;
  if (win) {
    win.minimize();
  }
};
