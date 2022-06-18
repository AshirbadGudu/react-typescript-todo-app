import { useTodoStore } from "../hooks";

type Task = {
  id: number;
  text: string;
};
type TaskListPropType = {
  task: Task;
};

export default function TaskList({ task }: TaskListPropType) {
  const { removeTask } = useTodoStore((state) => state);
  return (
    <>
      <li className="task-list">
        <span>{`${task.text}`}</span>
        <button onClick={() => removeTask(task.id)}>Delete</button>
      </li>
    </>
  );
}
