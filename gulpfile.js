'use strict';
 
var gulp = require('gulp');
var electron = require('electron-connect').server.create();
 
gulp.task('serve', function () {
  // Start browser process 
  electron.start();
 
  // Restart browser process 
  gulp.watch('app/index.js', electron.restart);
 
  // Reload renderer process 
  gulp.watch(['renderer/**/*.*'], electron.reload);

  electron.on('quit', () => {process.exit(0)})
});