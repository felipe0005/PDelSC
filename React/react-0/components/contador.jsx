import { useState } from "react";
import Boton from "./boton.jsx";

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <Boton onClick={() => setContador(contador + 1)} text={"sumar"} />
      <Boton onClick={() => setContador(contador - 1)} text={"restar"} />
    </div>
  );
}

export default Contador;
