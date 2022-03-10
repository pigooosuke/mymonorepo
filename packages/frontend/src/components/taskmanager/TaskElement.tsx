import React, { useMemo, useState } from "react";

import { useTaskStateContext } from "@/components/taskmanager/TaskManager";
import { Task } from "@/types/task";

export const TaskElement = ({ task }: { task: Task }) => {
  const context = useTaskStateContext();
  const dispatch = context.dispatch;
  const [checked, setChecked] = useState(task.done);

  const deleteTask = (index: number) => {
    dispatch({
      type: "delete",
      index: index,
      payload: [],
    });
  };

  const handleCheckboxClick = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };
  }, []);
  return (
    <>
      <button
        className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        name="taskDeleteButton"
        onClick={deleteTask.bind(this, task.id)}
        value={task.id}
        id="taskDeleteButton"
      >
        delete
      </button>
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        name="taskcheckbox"
        onChange={handleCheckboxClick}
        checked={checked}
        value={task.id}
        id="flexCheckDefault"
      />
      <label className="form-check-label inline-block text-gray-800 ml-2" htmlFor={task.title}>
        {task.title}
      </label>
    </>
  );
};
