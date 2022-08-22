import React from "react";
import Item from "../../components/Item/Item";

export default function News() {

  var news = [
    { titulo: "Titulo 1", subTitulo: "Subtitulo 1" },
    { titulo: "Titulo 2", subTitulo: "Subtitulo 2" },
  ];

  return (
    <div>
      <h1>News</h1>
      {news.map((noticia, key) => (
        <Item key={key} titulo={noticia.titulo} subTitulo={noticia.subTitulo} />
      ))}
    </div>
  );
}
