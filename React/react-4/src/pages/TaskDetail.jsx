import { useParams, Link } from "react-router-dom";

export default function TaskDetail({ tasks, setTasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <p className="text-red-600"> Tarea no encontrada</p>;
  }

  const toggleCompleted = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
      <p className="mb-2">{task.description}</p>
      <p className="text-sm text-gray-500"> {task.date}</p>
      <p
        className={`mt-2 font-semibold ${
          task.completed ? "text-green-600" : "text-red-600"
        }`}
      >
        {task.completed ? " Completa" : " Incompleta"}
      </p>


      <button
        onClick={toggleCompleted}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        {task.completed ? "Marcar como Incompleta" : "Marcar como Completa"}
      </button>

      <Link
        to="/"
        className="mt-4 inline-block text-blue-600 hover:underline block text-center"
      >
         Volver a la lista
      </Link>
    </div>
  );
}
