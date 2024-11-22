const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 940,
    minHeight: 560,
    frame: false, // Custom title bar without the default frame
    backgroundColor: "#ffffff", // Light background color like Notion
    titleBarStyle: "hidden", // Hidden title bar
    webPreferences: {
      nodeIntegration: false, // Disable nodeIntegration (use preload.js instead)
      contextIsolation: true, // Isolate context between renderer and main
      preload: path.join(__dirname, "preload.js"), // Path to preload.js
    },
  });

  win.loadURL("http://localhost:3000"); // React app URL in development

  // Handle window controls (minimize, maximize, close)
  ipcMain.on("minimize-window", () => win.minimize());
  ipcMain.on("maximize-window", () => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  ipcMain.on("close-window", () => win.close());
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
