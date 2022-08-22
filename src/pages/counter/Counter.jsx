import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Counter() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Testando o useEffect !!!");
    // return () => console.log("O componente foi desmontado !!!");
  }, []);
  //está sendo passado um callback para essa função
  //toda vez que o componente é recarregado vai aparecer a mensagem no concole.log

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ marginLeft: "2em" }}>
      <h3>Counter</h3>
      <h3>Teste de State</h3>
      <h1>{contador}</h1>
      <Button onClick={incrementarContador} size="small" variant="contained">
        Aumentar Contador
      </Button>

      <br />
      <br />

      <Link to="/">
        <Button to="/" size="small" variant="contained">
          Voltar para Home
        </Button>
      </Link>
    </div>
  );
}
