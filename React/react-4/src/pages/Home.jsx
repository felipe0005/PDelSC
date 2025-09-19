import { Link } from "react-router-dom";
import TaskCard from "../Components/TaskCard";

export default function Home({ tasks }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mis Tareas</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Link key={task.id} to={`/task/${task.id}`}>
            <TaskCard task={task} />
          </Link>
        ))}
      </div>
    </div>
  );
}
