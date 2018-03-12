import { app, BrowserWindow, protocol } from 'electron';
import * as path from 'path';
import { environment } from './environment.dev';
import { OrmConnector } from './orm-conector';
import { Teacher } from '../models/classes/teacher';

let win;

function createWindow() {
  if (environment.prod) {
    protocol.interceptFileProtocol(environment.PROTOCOL, (request, callback) => {
      // // Strip protocol
      let currentUrl = request.url.substr(environment.PROTOCOL.length + 1);

      // Build complete path for node require function
      currentUrl = path.join(__dirname, currentUrl);
      currentUrl = path.normalize(currentUrl);
      callback(currentUrl);
    });
  }

  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  });
  const t = new Teacher();
  for (const key of Object.keys(t)) {
    console.log(key);
  }


  win.loadURL(environment.startUrl);

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null;
  });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});

const orm = new OrmConnector();
