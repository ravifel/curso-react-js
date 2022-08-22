import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

function App() {
  var news = [
    {titulo: "Titulo 1", subTitulo: "Subtitulo 1"},
    {titulo: "Titulo 2", subTitulo: "Subtitulo 2"}
  ];

  return (
    <div>
      {news.map((noticia, key) => (
        <Item key={key} titulo={noticia.titulo}  subTitulo={noticia.subTitulo}/>
      ))}
    </div>
  );
}

export default App;
