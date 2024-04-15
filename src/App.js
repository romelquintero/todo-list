import { useState } from "react";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

export default function App() {
  const [list, setList] = useState([]);

  function handleList(task) {
    setList((list) => [...list, task]);
  }

  function addEdited(editedTask) {
    console.log(list);
    setList((list) =>
      list.map((task) =>
        task.id === editedTask.id
          ? { ...editedTask, edited: !editedTask.edited }
          : task
      )
    );
    return list;
  }

  function removeTask(id) {
    setList((list) => list.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setList((list) =>
      list.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleEditTask(id) {
    setList((list) =>
      list.map((task) =>
        task.id === id ? { ...task, edited: !task.edited } : task
      )
    );
  }

  return (
    <div>
      <TaskForm onAddList={handleList} />
      <TasksList
        list={list}
        onRemoveTask={removeTask}
        onToggleTask={handleToggleTask}
        onEditTask={handleEditTask}
        onAddList={addEdited}
      />
    </div>
  );
}
