import { app, BrowserWindow } from "electron";

let win: Electron.BrowserWindow;

const createWindow = () => {
  win = new BrowserWindow({
    alwaysOnTop: true,
    height: 600,
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });

  win.loadURL("http://google.com.br");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
