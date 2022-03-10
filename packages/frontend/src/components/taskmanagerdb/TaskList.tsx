import { TaskElement } from "@/components/taskmanagerdb/TaskElement";
import { Task } from "@/types/task";

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <>
      <div>
        <ul>
          {tasks.map((task: Task) => (
            <li key={task.id}>
              <TaskElement task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
