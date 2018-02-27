const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const join = require('path').join;

// Replace '..' with 'about-window'
const openAboutWindow = require('..').default;

app.once('window-all-closed', function() {
    app.quit();
});

app.once('ready', function() {
    let w = new BrowserWindow();
    w.once('closed', function() {
        w = null;
    });
    w.loadURL('file://' + join(__dirname, 'index.html'));

    const menu = Menu.buildFromTemplate([
        {
            label: 'Example',
            submenu: [
                {
                    label: 'About This App',
                    click: () =>
                        openAboutWindow({
                            icon_path: join(__dirname, 'icon.png'),
                            copyright: 'Copyright (c) 2015 rhysd',
                            package_json_dir: __dirname,
                            open_devtools: process.env.NODE_ENV !== 'production',
                        }),
                },
          {
            label: 'Example',
            submenu: [
                {
                    label: 'About This App',
                    click: () =>
                        openAboutWindow({
                            icon_path: join(__dirname, 'icon.png'),
                            copyright: 'Copyright (c) 2015 rhysd',
                            package_json_dir: __dirname,
                            open_devtools: process.env.NODE_ENV !== 'production',
                        }),
                },
           {
            label: 'Example',
            submenu: [
                {
                    label: 'About This App',
                    click: () =>
                        openAboutWindow({
                            icon_path: join(__dirname, 'icon.png'),
                            copyright: 'Copyright (c) 2015 rhysd',
                            package_json_dir: __dirname,
                            open_devtools: process.env.NODE_ENV !== 'production',
                        }),
                },
           {
            label: 'Example',
            submenu: [
                {
                    label: 'About This App',
                    click: () =>
                        openAboutWindow({
                            icon_path: join(__dirname, 'icon.png'),
                            copyright: 'Copyright (c) 2015 rhysd',
                            package_json_dir: __dirname,
                            open_devtools: process.env.NODE_ENV !== 'production',
                        }),
                },     
            ],
        },
    ]);
    Menu.setApplicationMenu(menu);
});
