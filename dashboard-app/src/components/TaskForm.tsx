import { useTasks } from "../hooks/useTasks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Task } from "../Types";

const schema = z.object({
  title: z.string().min(2, "Title too short"),
  assignedTo: z.number().int("Must be an integer").positive("Must be positive"),
});

type FormData = z.infer<typeof schema>;
const currentTime = Date.now();

const TaskForm = () => {
  const {
    state: { users },
    dispatch,
  } = useTasks();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const newTask: Task = {
      id: currentTime,
      title: data.title,
      done: false,
      assignedTo: data.assignedTo,
    };

    dispatch({ type: "add", payload: newTask });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 bg-gray-700 p-4 rounded my-4"
    >
      <input
        type="text"
        placeholder="Task title"
        className="flex-1 p-2 rounded border bg-gray-800 border-gray-700"
        {...register("title")}
      />
      <select
        {...register("assignedTo", { valueAsNumber: true })}
        className="p-2 rounded border border-gray-700 bg-gray-800"
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add
      </button>

      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}
    </form>
  );
};

export default TaskForm;
