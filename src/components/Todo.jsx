import { useState } from "react";
import { LuPencilLine, LuTrash2 } from "react-icons/lu";
const Todo = ({ task, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [completed, setCompleted] = useState(false);

  //When Click Edit
  const handleEdit = () => {
    setEditing(true);
  };
  //When Click Cancel
  const handleCancel = () => {
    setEditing(false);
  };

  //When Click Save
  const handleSave = () => {
    onEdit(task.id, editedTask);
    setEditing(false);
  };

  //When Click and Line Through
  const handleToggle = () => {
    setCompleted(!completed);
  };
  return (
    <>
      <div className="mt-4 space-y-3">
        {editing ? (
          <div className="flex gap-2 ">
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="bg-white border border-gray-300 p-2 rounded-lg shadow-sm w-3/4 focus:outline-blue-400"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-400 font-semibold text-white p-2 rounded-md transition ease-in duration-200 hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="bg-red-400 font-semibold text-white p-2 rounded-md transition ease-in duration-200 hover:bg-red-600"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 cursor-pointer justify-between bg-white border border-gray-300 p-2 rounded-lg shadow-sm">
            <p
              onClick={handleToggle}
              className={
                completed
                  ? "flex-1 min-w-0 line-through text-gray-400 cursor-pointer break-words"
                  : "flex-1 min-w-0 *:cursor-pointer break-words"
              }
            >
              {task.task}
            </p>
            <div className="flex gap-4 flex-shrink-0">
              <button
                type="button"
                className="cursor-pointer bg-blue-400 p-2 rounded-md transition ease-in duration-200 hover:bg-blue-600"
                onClick={handleEdit}
              >
                <span>
                  <LuPencilLine className="text-white text-xl " />
                </span>
              </button>
              <button
                type="button"
                className="cursor-pointer bg-red-400 p-2 rounded-md transition ease-in duration-200 hover:bg-red-600"
                onClick={() => onDelete(task.id)}
              >
                <span>
                  <LuTrash2 className="text-white text-xl " />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
