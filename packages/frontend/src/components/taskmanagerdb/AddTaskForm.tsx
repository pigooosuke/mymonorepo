import React, { useState } from "react";

import { useMutation } from "@apollo/client";

import { AddTaskMutation, AllTasksQuery } from "@/lib/query/task.gql";

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const [addTask, { loading, error }] = useMutation(AddTaskMutation, {
    refetchQueries: [AllTasksQuery],
  });

  const HandleOnSubmit = () => {
    if (!title) return;
    addTask({ variables: { title: title, done: false } });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    setTitle("");
  };

  return (
    <>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          HandleOnSubmit();
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
