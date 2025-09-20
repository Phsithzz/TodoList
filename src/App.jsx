import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: todos.length + 1, task: todo }]);
  };
  const onDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const onEdit = (id, editedTask) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: editedTask } : todo
      )
    );
  };
  return (
    <>
      <div className="container mx-auto mt-16 p-8 bg-white max-w-full sm:max-w-lg rounded-xl shadow-xl">
        <h1 className="text-center font-bold text-3xl">TODOLIST</h1>

        <TodoForm addTodo={addTodo} />

        {todos.map((todo) => (
          <Todo key={todo.id} task={todo} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default App;
