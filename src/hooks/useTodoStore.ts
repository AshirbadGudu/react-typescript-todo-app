import create from "zustand";
type Task = {
  id: number;
  text: string;
};

type TodoStore = {
  taskTxt: string;
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  setTaskTxt: (txt: string) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  taskTxt: "",
  tasks: [],
  setTaskTxt: (taskTxt: string) => set((state) => ({ ...state, taskTxt })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
}));

export default useTodoStore;
