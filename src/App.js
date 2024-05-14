import { TodoProvider } from "./components/ex04-Todo-App/hook/TodoProvider";
import TodoApp from "./components/ex04-Todo-App/TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

export default App;
