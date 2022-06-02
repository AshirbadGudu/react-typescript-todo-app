import { ChangeEvent, FormEvent } from "react";

type AddTaskFormPropTypes = {
  onAddTask: (e: FormEvent<HTMLFormElement>) => void;
  onChangeTaskText: (e: ChangeEvent<HTMLInputElement>) => void;
  taskTxt: string;
};

export default function AddTaskForm({
  onAddTask,
  onChangeTaskText,
  taskTxt,
}: AddTaskFormPropTypes) {
  return (
    <>
      <form onSubmit={onAddTask}>
        <input
          type="text"
          placeholder="Enter New Task"
          value={taskTxt}
          onChange={onChangeTaskText}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
