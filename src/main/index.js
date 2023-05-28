import { app, BrowserWindow } from 'electron';

import { initMainWindow } from '@main/utils';

app.on('ready', initMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    initMainWindow();
  }
});
