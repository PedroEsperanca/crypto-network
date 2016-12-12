"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log("Electron launching with NODE_ENV: " + process.env.NODE_ENV);
// electron
var electron = require('electron');
var app = electron.app;
var eMenu = electron.Menu;
var shell = electron.shell;
// const crashReporter: any = electron.crashReporter;
var browserWindow = electron.BrowserWindow;
var mainWindow = undefined;
var template;
var menu;
// app
var app_config_1 = require('frameworks/sample/services/app-config');
/*crashReporter.start({
  productName: 'Angular2WebpackAdvanceStarter',
  companyName: 'JonnyBGod',
  submitURL: 'https://github.com/JonnyBGod/angular2-webpack-advance-starter',
  autoSubmit: true
});*/
if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('ready', function () {
    // Tell Electron where to load the entry point from
    if (process.env.NODE_ENV === 'development') {
        // Initialize the window to our specified dimensions
        mainWindow = new browserWindow({
            width: 900,
            height: 620,
            webPreferences: {
                preload: __dirname + '/../src/assets/preloadDesktop.js'
            }
        });
        mainWindow.loadURL('http://localhost:3000/');
    }
    else {
        // Initialize the window to our specified dimensions
        mainWindow = new browserWindow({ width: 900, height: 620 });
        mainWindow.loadURL('file://' + __dirname + '/index.html');
    }
    // Clear out the main window when the app is closed
    mainWindow.on('closed', function () {
        mainWindow = undefined;
    });
    mainWindow.webContents.on('did-navigate-in-page', function (e, url) {
        console.log("Page navigated: " + url);
    });
    var appTitle = "Angular 2 Webpack Advance Starter";
    var langMenu = {
        label: 'Language',
        submenu: []
    };
    var _loop_1 = function(lang) {
        var code = lang.code;
        var langOption = {
            label: lang.title,
            click: function () {
                console.log("Change lang: " + code);
                mainWindow.webContents
                    .executeJavaScript("window.dispatchEvent(new CustomEvent('changeLang', {detail: { value: '" + code + "'} }));");
            }
        };
        langMenu.submenu.push(langOption);
    };
    for (var _i = 0, _a = app_config_1.AppConfig.SUPPORTED_LANGUAGES; _i < _a.length; _i++) {
        var lang = _a[_i];
        _loop_1(lang);
    }
    var helpMenu = {
        label: 'Help',
        submenu: [{
                label: 'Learn More',
                click: function () {
                    shell.openExternal('https://github.com/JonnyBGod/angular2-webpack-advance-starter');
                }
            }, {
                label: 'Issues',
                click: function () {
                    shell.openExternal('https://github.com/JonnyBGod/angular2-webpack-advance-starter/issues');
                }
            }, {
                label: "My Amazing Parent: Minko Gechev's Angular 2 Seed",
                click: function () {
                    shell.openExternal('https://github.com/mgechev/angular2-seed');
                }
            }, {
                label: 'Angular 2',
                click: function () {
                    shell.openExternal('https://angular.io/');
                }
            }, {
                label: 'Electron',
                click: function () {
                    shell.openExternal('http://electron.atom.io/');
                }
            }, {
                label: 'Electron Docs',
                click: function () {
                    shell.openExternal('https://github.com/atom/electron/tree/master/docs');
                }
            }, {
                label: 'Codeology Visualization',
                click: function () {
                    shell.openExternal('http://codeology.braintreepayments.com/JonnyBGod/angular2-webpack-advance-starter');
                }
            }]
    };
    if (process.platform === 'darwin') {
        template = [{
                label: appTitle,
                submenu: [{
                        label: "About " + appTitle,
                        selector: 'orderFrontStandardAboutPanel:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Services',
                        submenu: []
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Hide Angular 2 Seed Advanced',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    }, {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    }, {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
                    }]
            }, {
                label: 'Edit',
                submenu: [{
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    }, {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    }, {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    }, {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    }, {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }]
            }, {
                label: 'View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: 'Reload',
                        accelerator: 'Command+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Alt+Command+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            }, {
                label: 'Window',
                submenu: [{
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    }, {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }]
            },
            langMenu,
            helpMenu];
        menu = eMenu.buildFromTemplate(template);
        eMenu.setApplicationMenu(menu);
    }
    else {
        template = [{
                label: '&File',
                submenu: [{
                        label: '&Open',
                        accelerator: 'Ctrl+O'
                    }, {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: function () {
                            mainWindow.close();
                        }
                    }]
            }, {
                label: '&View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: '&Reload',
                        accelerator: 'Ctrl+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            },
            langMenu,
            helpMenu];
        menu = eMenu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
});
//# sourceMappingURL=main.desktop.js.map