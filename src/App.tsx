import { FormEvent, useState } from "react";
import "./App.css";
import { AddTaskForm, AppHeader, TaskList } from "./components";

type Task = {
  id: number;
  text: string;
};

function App() {
  const [taskTxt, setTaskTxt] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTxt.trim() === "") return;
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: taskTxt.trim(),
      },
    ]);
    setTaskTxt("");
  };

  const deleteTask = (id: number) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  return (
    <div className="App">
      <AppHeader />
      <main>
        <AddTaskForm
          onAddTask={addTask}
          onChangeTaskText={(e) => setTaskTxt(e.target.value)}
          taskTxt={taskTxt}
        />
        <section>
          <ul>
            {tasks.map((task) => (
              <TaskList deleteTask={deleteTask} task={task} key={task.id} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
