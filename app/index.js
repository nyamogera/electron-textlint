'use strict';
 
const electron = require('electron');
const app = electron.app; 
const BrowserWindow = electron.BrowserWindow;
const windowStateKeeper = require('electron-window-state');

var client = null;

console.log(process.env.NODE_ENV)
if( process.env.NODE_ENV === 'production' ){
  client = require('electron-connect').client;
}

app.on('ready', function () {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 400,
    defaultHeight: 300
  });

  var mainWindow = new BrowserWindow({
    x:mainWindowState.x,
    y:mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height
  });

  mainWindow.loadUrl('file://' + __dirname + '/../renderer/index.html');


  mainWindowState.manage(mainWindow);

  // Connect to server process
  if( client ) {
    client.create(mainWindow);
  }

});