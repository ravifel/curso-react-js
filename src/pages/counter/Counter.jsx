import React from "react";
import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{marginLeft: "2em"}}>
      <h1>Counter</h1>
      <h1>Teste de State</h1>
      <h3>{contador}</h3>
      <button onClick={incrementarContador}>Aumentar</button>
    </div>
  );
}
