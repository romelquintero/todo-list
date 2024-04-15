import Task from "./Task";

export default function TasksList({
  list,
  onRemoveTask,
  onToggleTask,
  onAddList,
  onEditTask,
}) {
  return (
    <ul>
      {list.map((task) => (
        <Task
          task={task}
          key={task.id}
          onRemoveTask={onRemoveTask}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
          onAddList={onAddList}
        />
      ))}
    </ul>
  );
}
