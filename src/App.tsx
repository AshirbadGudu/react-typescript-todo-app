import { FormEvent, useState } from "react";
import "./App.css";
import { AddTaskForm, AppHeader, TaskList } from "./components";
import { useTodoStore } from "./hooks";

function App() {
  const { tasks } = useTodoStore((state) => state);

  return (
    <div className="App">
      <AppHeader />
      <main>
        <AddTaskForm />
        <section>
          <ul>
            {tasks.map((task) => (
              <TaskList task={task} key={task.id} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
