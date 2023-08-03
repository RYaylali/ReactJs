import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import { useEffect } from "react";
import TasksContext from "./context/task";

function App() {
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []); //Her seferinde render edilmemesi için [] işareti kullanıldı

  return (
    <div className="App">
      <TaskCreate />
      <h1 className="task-baslık">Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
