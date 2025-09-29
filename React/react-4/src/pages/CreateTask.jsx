import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTask({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleDateString(),
        completed: false, // 
      },
    ]);

    navigate("/"); // Redirige a Home
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-4"> Nueva Tarea</h2>

      <label className="block mb-2 font-semibold">Título</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border rounded-lg mb-4"
      />

      <label className="block mb-2 font-semibold">Descripción</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        pattern="^[^0-9]*$"
        required
        className="w-full p-2 border rounded-lg mb-4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Guardar
      </button>
    </form>
  );
}
