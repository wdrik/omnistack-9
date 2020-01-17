import React, { useState, useMemo } from "react";
import api from "../../services/api";

import camera from "../../assets/camera.svg";

import "./styles.css";

export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);
    data.append("thumbnail", thumbnail);

    await api.post("/spots", data, {
      headers: {
        user_id
      }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail && `has-thumbnail`}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">
        EMPRESA <span>* </span>
      </label>

      <input
        type="text"
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIAS <span>* </span> <small>(separadas por virgula)</small>
      </label>

      <input
        type="text"
        id="techs"
        placeholder="Sua empresa incrível"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="price">
        VALOR DA DIÁRIA <span>* </span>
        <small>(em branco para GRATUITO)</small>
      </label>

      <input
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
}
