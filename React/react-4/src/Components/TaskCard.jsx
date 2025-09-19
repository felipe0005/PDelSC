export default function TaskCard({ task }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p className="text-gray-600">{task.description.slice(0, 40)}...</p>
      <p
        className={`mt-2 text-sm ${
          task.completed ? "text-green-600" : "text-red-600"
        }`}
      >
        {task.completed ? " Completa" : " Incompleta"}
      </p>
    </div>
  );
}
