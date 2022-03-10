import { useQuery } from "@apollo/client";

import { AddTaskForm } from "@/components/taskmanagerdb/AddTaskForm";
import { TaskList } from "@/components/taskmanagerdb/TaskList";
import { AllTasksQuery } from "@/lib/query/task.gql";

export const TaskManager = () => {
  const { data, loading, error } = useQuery(AllTasksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Task Manager DB</h1>
      <p>DB連携ver</p>
      <AddTaskForm />
      <TaskList tasks={data.tasks} />
    </>
  );
};
