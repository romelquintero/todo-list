import { useState } from "react";
import Button from "./Button";

export default function EditTask({ onAddList, task }) {
  const [editedTask, setEditedTask] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedTask = {
      ...task,
      task: editedTask,
      edited: !task.edited, // Aquí invertimos la propiedad edited
    };

    onAddList(updatedTask);
    setEditedTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedTask}
        onChange={(e) => setEditedTask(e.target.value)}
      />
      <Button>Edit Task</Button>
    </form>
  );
}
