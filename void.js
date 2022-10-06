// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: 'CLIENT/IMG/logo.png',
    width: 800,
    height: 600,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('CLIENT/HTML/main-page.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('close', () => {
    BrowserWindow.getFocusedWindow().close();
})

ipcMain.on('maxUnmax', () => {
    if(BrowserWindow.getFocusedWindow().isMaximized()){
        BrowserWindow.getFocusedWindow().unmaximize();
    }else{
        BrowserWindow.getFocusedWindow().maximize();
    }
})

ipcMain.on('minimize', () => {
    BrowserWindow.getFocusedWindow().minimize();
})
