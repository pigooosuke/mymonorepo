import { TaskElement } from "@/components/taskmanager/TaskElement";
import { useTaskStateContext } from "@/components/taskmanager/TaskManager";
import { Task } from "@/types/task";

export const TaskList = () => {
  const context = useTaskStateContext();
  const state = context.state;

  return (
    <>
      <div>
        <ul>
          {state.tasks.map((task: Task) => (
            <li key={task.id}>
              <TaskElement task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
