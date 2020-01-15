import React from "react";
import "./App.css";

import camera from "./assets/camera.svg";
import logo from "./assets/logo.svg";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <img src={camera} alt="Camera" />
      <img src={logo} alt="Camera" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
