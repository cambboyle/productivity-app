import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import CustomTitleBar from "./components/CustomTitleBar";
import "./index.css";

function App() {
  return (
    <div className="app">
      <CustomTitleBar />
      <MainContent />
    </div>
  );
}

export default App;
