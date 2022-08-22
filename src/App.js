import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

function App() {
  var news = ["Titulo 1", "Titulo 2", "Titulo 3", "Titulo 4"];

  return (
    <div>
      <Item titulo={news[0]}/>
      <Item titulo={news[1]}/>
      <Item titulo={news[2]}/>
    </div>
  );
}

export default App;
