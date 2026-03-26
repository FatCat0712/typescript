import { createContext, type Dispatch } from "react";
import { type TaskAction, type TaskState } from "../Types";

export type TaskContextValue = {
  state: TaskState;
  dispatch: Dispatch<TaskAction>;
};

export const TaskContext = createContext<TaskContextValue | null>(null);
