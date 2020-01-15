import React, { useState } from "react";
import api from "./services/api";
import "./App.css";

import camera from "./assets/camera.svg";
import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await api.post("/sessions", { email });

    console.log(data);
  }

  return (
    <div className="container">
      <img src={logo} alt="Camera" />
      <img src={camera} alt="Camera" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre
          <strong> talentos </strong>
          para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            E-MAIL <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
