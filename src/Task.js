import Button from "./Button";
import EditTask from "./EditTask";
// import TaskForm from "./TaskForm";

export default function Task({
  task,
  onRemoveTask,
  onToggleTask,
  onEditTask,
  onAddList,
}) {
  return (
    <li>
      {task.edited ? (
        <EditTask task={task} onAddList={onAddList} />
      ) : (
        <>
          <input
            type="checkbox"
            value={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <span
            style={task.completed ? { textDecoration: "line-through" } : {}}>
            {task.task}
          </span>
          <Button onClick={() => onRemoveTask(task.id)}>Remove</Button>
          <Button onClick={() => onEditTask(task.id)}>Edit</Button>
        </>
      )}
    </li>
  );
}
