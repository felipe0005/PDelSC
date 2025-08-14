import { useState } from "react";

function Lista() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;
    setTareas([
      ...tareas,
      { texto: nuevaTarea, completada: false }
    ]);
    setNuevaTarea("");
  };

  const marcarCompletada = (index) => {
    setTareas(
      tareas.map((tarea, i) =>
        i === index ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
              cursor: "pointer"
            }}
            onClick={() => marcarCompletada(index)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;