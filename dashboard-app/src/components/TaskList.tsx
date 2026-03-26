import { useTasks } from "../hooks/useTasks";
import type { Task } from "../Types";

function TaskList({ taskQuery }: { taskQuery: string }) {
  const {
    state: { tasks, users },
    dispatch,
  } = useTasks();

  const filteredTasks = tasks.filter((t) => t.title.includes(taskQuery)); // You can implement filtering logic here based on props or state

  return (
    <div className="bg-gray-800 rounded shadow divide-gray-200">
      {filteredTasks.length === 0 && (
        <div className="p-4 text-center text-gray-500">No tasks found</div>
      )}
      {filteredTasks.length > 0 &&
        filteredTasks.map((t: Task) => (
          <div className="flex justify-between items-center p-3" key={t.id}>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                checked={t.done}
                aria-label="toggle check"
                onChange={() => dispatch({ type: "toggle", payload: t.id })}
              />
              <span className={t.done ? "line-through" : ""}>{t.title}</span>
              <small className="text-gray-500">
                {users.find((u) => u.id === t.assignedTo)?.name}
              </small>
            </div>
            <button
              className="text-red-600 hover:underline hover:cursor-pointer"
              onClick={() => dispatch({ type: "remove", payload: t.id })}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
