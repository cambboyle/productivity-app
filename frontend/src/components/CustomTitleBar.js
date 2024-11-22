import React, { useState } from "react";
import "./CustomTitleBar.css";

function CustomTitleBar() {
  const minimizeWindow = () => {
    window.electron.minimizeWindow(); // Use the exposed Electron API
  };

  const maximizeWindow = () => {
    window.electron.maximizeWindow(); // Use the exposed Electron API
  };

  const closeWindow = () => {
    window.electron.closeWindow(); // Use the exposed Electron API
  };

  return (
    <div className="custom-title-bar">
      {/* App Title */}
      <h1 className="app-title">mica.</h1>

      {/* Window Controls */}
      <div className="window-controls no-drag">
        <button className="control-btn minimize" onClick={minimizeWindow}>
          _
        </button>
        <button className="control-btn maximize" onClick={maximizeWindow}>
          ☐
        </button>
        <button className="control-btn close" onClick={closeWindow}>
          ✕
        </button>
      </div>

      {/* Burger Menu */}
      <button className="burger-menu no-drag">☰</button>
    </div>
  );
}

export default CustomTitleBar;
