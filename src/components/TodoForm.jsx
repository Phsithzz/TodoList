import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value == "") {
      setError("Please Enter a Task");
      return;
    }

    addTodo(value);
    setValue("");
    setError("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError("");
            }}
            className="w-3/4 bg-white border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-blue-400"
            placeholder="Enter Task"
          />
          <button
            type="submit"
            className="bg-green-400 cursor-pointer font-semibold text-white p-2 rounded-md transition ease-in duration-200 hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
        <div className="mt-2">
          {error && (
            <>
              <p className="text-red-500 font-bold text-xs">{error}</p>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default TodoForm;
