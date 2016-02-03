/* jshint node: true */

var electron = require('electron');

var app = electron.app;
var mainWindow = null;
var BrowserWindow = electron.BrowserWindow;

var Cylon = require('cylon');



electron.crashReporter.start();

app.on('window-all-closed', function onWindowAllClosed() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', function onReady() {
    mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        overlayScrollbars: false
    });

    delete mainWindow.module;

    // If you want to open up dev tools programmatically, call
    mainWindow.openDevTools();

    // By default, we'll open the Ember App by directly going to the
    // file system.
    //
    // Please ensure that you have set the locationType option in the
    // config/environment.js file to 'hash'. For more information,
    // please consult the ember-electron readme.
    mainWindow.loadURL('file://' + __dirname + '/dist/index.html');



    Cylon.robot({
       name: "octanis1_rover",
       connections: {
         octanis1_rover: {adaptor: 'octanis1-rover'}
         /* bluetooth: { adaptor: 'ble', uuid: 'cbef787e50934150ace41ce6385efabf'} */
       },

       devices: {

	/*    rover_ble: {
          driver: "ble_cli",
          serviceId: "ffe0", characteristicId: "ffe1",
          connection: "bluetooth"
        },
	*/

        rover_joystick: {
          driver: "joystick",
          connection: "octanis1_rover"
        }
      }

    });

    Cylon.api('socketio',{
      host: '0.0.0.0', // CHANGE THIS!!!
      port: '3000'
    });


    try {
      Cylon.start();
    } catch(err){
      console.log(err);
    }



    mainWindow.on('closed', function onClosed() {
        mainWindow = null;
    });
});
