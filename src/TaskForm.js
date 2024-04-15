import { useState } from "react";
import Button from "./Button";

export default function TaskForm({ onAddList }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      task,
      completed: false,
      edited: false,
      id: Math.random(),
    };

    onAddList(newTask);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
