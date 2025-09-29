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
        completed: false, // 👈 siempre empieza como incompleta
      },
    ]);

    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 shadow-2xl rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-4"> Nueva Tarea</h2>

      <label className="block mb-2 font-semibold">Título</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.replace(/[0-9]/g, ""))}
        required
        className="w-full p-2 border rounded-lg mb-4 invalid:ring-red-500"
      />

      <label className="block mb-2 font-semibold">Descripción</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full p-2 border rounded-lg mb-4 invalid:ring-red-500"
      ></textarea>

      <button
        type="submit"
        className="font-bold w-full border-2  bg-blue-600 text-white py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 transition duration-200"
      >
        Guardar
      </button>
    </form>
  );
}
