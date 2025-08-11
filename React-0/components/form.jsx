import { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <h2>¡Bienvenido, {nombre}!</h2>
      )}
    </div>
  );
}

export default Form;
