const express = require('express')
const { app, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// Serve the app using Express
const server = express();
server.use(express.static(path.join(__dirname, 'build')));
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});