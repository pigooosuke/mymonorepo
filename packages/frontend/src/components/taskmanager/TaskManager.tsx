import { createContext, useContext, useReducer } from "react";

import { AddTaskForm } from "@/components/taskmanager/AddTaskForm";
import { TaskList } from "@/components/taskmanager/TaskList";
import { Task } from "@/types/task";

const initialState = {
  tasks: [
    { id: 1, title: "aaa", done: false },
    { id: 2, title: "bbb", done: true },
    { id: 3, title: "ccc", done: true },
  ],
};

type State = { tasks: Task[] };
interface Action {
  type: "add" | "delete";
  index: number;
  payload: Task[];
}
type Dispatch = (action: Action) => void;

export const TaskStateContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

export const taskReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    case "delete":
      return {
        ...state,
        tasks: state.tasks.filter((obj) => obj.id !== action.index),
        // tasks: [...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)],
      };
    default:
      throw new Error("action type is invalid");
  }
};

export function useTaskStateContext() {
  const context = useContext(TaskStateContext);
  if (context === undefined) {
    throw new Error("useTaskStateContext must be used within a TaskManager");
  }
  return context;
}

export const TaskManager = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const value = { state, dispatch };
  return (
    <>
      <h1>Task Manager</h1>
      <p>State管理ver</p>
      <TaskStateContext.Provider value={value}>
        <AddTaskForm />
        <TaskList />
      </TaskStateContext.Provider>
    </>
  );
};
