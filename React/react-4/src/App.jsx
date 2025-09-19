import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import TaskDetail from "./pages/TaskDetail";
import CreateTask from "./pages/CreateTask";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Traemos los datos del JSON en public
  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error cargando tareas:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/" className="font-bold text-xl">
          📋 Lista de Tareas
        </Link>
        <Link
          to="/create"
          className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-200"
        >
          Nueva Tarea
        </Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/task/:id"
            element={<TaskDetail tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/create" element={<CreateTask setTasks={setTasks} />} />
        </Routes>
      </div>
    </div>
  );
}
