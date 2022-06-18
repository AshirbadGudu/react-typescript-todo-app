import { FormEvent } from "react";
import { useTodoStore } from "../hooks";

export default function AddTaskForm() {
  const { taskTxt, setTaskTxt, addTask } = useTodoStore((state) => state);
  const onAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({
      text: taskTxt,
      id: Date.now() + Math.random(),
    });
    setTaskTxt("");
  };
  return (
    <>
      <form className="add-task-form" onSubmit={onAddTask}>
        <input
          required
          type="text"
          placeholder="Enter New Task"
          value={taskTxt}
          onChange={(e) => setTaskTxt(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
