type Task = {
  id: number;
  text: string;
};
type TaskListPropType = {
  task: Task;
  deleteTask: (id: number) => void;
};

export default function TaskList({ task, deleteTask }: TaskListPropType) {
  return (
    <>
      <li className="task-list">
        <span>{`${task.text}`}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    </>
  );
}
