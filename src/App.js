import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";
import {useState} from "react";

function App() {

  const [contador, setContador]=useState(0)

  var news = [
    { titulo: "Titulo 1", subTitulo: "Subtitulo 1" },
    { titulo: "Titulo 2", subTitulo: "Subtitulo 2" },
  ];

  function incrementarContador() {
    setContador(contador+1)
  }

  return (
    <div>
      {news.map((noticia, key) => (
        <Item key={key} titulo={noticia.titulo} subTitulo={noticia.subTitulo} />
      ))}

      <h1>Teste de State</h1>
      <h3>{contador}</h3>
      <button onClick={incrementarContador}>Aumentar</button>
    </div>
  );
}

export default App;
