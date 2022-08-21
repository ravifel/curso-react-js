import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

function App() {

  function consoleTeste() {
    console.log("foi !!!")
  }

  return (
    <div>
      <Item titulo="Noticia do dia !!!" subTitulo="Subtitulo da noticia do dia" funcaoBotao={consoleTeste}/>
      <Item titulo="Noticia da semana !!!" subTitulo="Subtitulo da noticia da semana"/>
      <Item titulo="Noticia da semana !!!" subTitulo="Subtitulo da noticia da semana"/>
      <Item titulo="Noticia da semana !!!" subTitulo="Subtitulo da noticia da semana"/>
      <Item titulo="Noticia da semana !!!" subTitulo="Subtitulo da noticia da semana"/>
      <button onClick={consoleTeste}>Testando metodo no botão</button>
    </div>
  );
}

export default App;
