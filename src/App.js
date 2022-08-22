import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

function App() {
  var news = ["Titulo 1", "Titulo 2", "Titulo 3", "Titulo 4"];

  return (
    <div>
      {news.map((tituloNoticia) => (
        <Item titulo={tituloNoticia}/>
      ))}
    </div>
  );
}

export default App;
