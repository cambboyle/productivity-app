import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="burger-menu">☰</button>
          <h1 className="navbar-title">mica.</h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
