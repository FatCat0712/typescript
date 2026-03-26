import { useEffect, useReducer, type ReactNode } from "react";
import { type TaskState, type TaskAction } from "../Types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskContext } from "./TaskContextObject.ts";

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "add":
      return { ...state, task: [...state.task, action.payload] };
    case "toggle":
      return {
        ...state,
        task: state.task.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t,
        ),
      };
    case "remove":
      return {
        ...state,
        task: state.task.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [persistedState, persistState] = useLocalStorage<TaskState>(
    "dashboard-state",
    {
      task: [
        {
          id: 1,
          title: "Learn TS",
          done: false,
          assignedTo: 1,
        },
      ],
      users: [
        {
          id: 1,
          name: "dunglv",
          email: "dunglv@gmail.com",
          role: "admin",
        },
      ],
    },
  );

  const [state, dispatch] = useReducer(taskReducer, persistedState);

  useEffect(() => {
    persistState(state);
  }, [state, persistState]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
