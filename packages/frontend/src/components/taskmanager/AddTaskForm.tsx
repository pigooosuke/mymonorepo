import React, { useState } from "react";

import { useTaskStateContext } from "@/components/taskmanager/TaskManager";

export const AddTaskForm = () => {
  const context = useTaskStateContext();
  const { state, dispatch } = context;
  const [title, setTitle] = useState("");

  const addTask = (title: string) => {
    let newIndex = 1;
    if (state.tasks.length !== 0) {
      newIndex = state.tasks.slice(-1)[0].id + 1;
    }
    const newTask = [
      {
        id: newIndex,
        title: title,
        done: false,
      },
    ];
    dispatch({
      type: "add",
      index: newIndex,
      payload: newTask,
    });
  };

  const handleOnSubmit = () => {
    if (!title) return;
    addTask(title);
    setTitle("");
  };

  return (
    <>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <div>
          <input
            className="shadow appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskname"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="TaskTitle"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onSubmit={(e) => e.preventDefault()}
          >
            Sumbit
          </button>
        </div>
      </form>
    </>
  );
};
