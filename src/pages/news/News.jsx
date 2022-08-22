import React, { useState } from "react";
import Item from "../../components/Item/Item";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function News() {
  const [hideItem, setHideItem] = useState(false);

  var news = [
    { titulo: "Titulo 1", subTitulo: "Subtitulo 1" },
    { titulo: "Titulo 2", subTitulo: "Subtitulo 2" },
  ];

  return (
    <div style={{ marginLeft: "2em" }}>
      <h1>News</h1>
      {hideItem === false
        ? news.map((noticia, key) => (
            <Item
              key={key}
              titulo={noticia.titulo}
              subTitulo={noticia.subTitulo}
            />
          ))
        : null}

      <Button
        onClick={() => setHideItem(!hideItem)}
        size="small"
        variant="contained"
      >
        {/* Nome do Botão */}
        {hideItem === false ? "Desmontar Componente" : "Montar Componente"}
      </Button>

      <br />
      <br />

      <Link to="/">
        <Button size="small" variant="contained">
          Voltar para Home
        </Button>
      </Link>
    </div>
  );
}
