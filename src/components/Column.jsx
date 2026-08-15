import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

function Column({title, count, children, status, onAddTask}){
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });
  const [showForm, setShowForm] = useState(false);
  const [priority, setPriority] = useState("Medium");
  const [taskTitle, setTaskTitle] = useState("");
    return(
      <section
        ref={setNodeRef}
        className={`column ${isOver ? "drop-active" : ""}`}
      >
        <div className="column-header">
          <div>
            <span className="column-dot"></span>
            <h2>{title}</h2>
          </div>
          <span className="task-count">{count}</span>
          </div>
            
          <div className="task-list">
          {children}
          </div>
          <button
            className="column-add"
            onClick={() => {
              setTaskTitle("");
              setPriority("Medium");
              setShowForm(true);
            }}
          >
            + Add Task
          </button>
          {showForm && (
            <div className="popup-overlay" onClick={
              () => setShowForm(false)
            }>
            <div className="column-popup" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={() => setShowForm(false)}>×</button>
              <h3>Add new task</h3>
              <input
                type="text"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                autoFocus
              />
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              <button className="popup-add-button"
                onClick={() => {
                  if (!taskTitle.trim()) return;
                  onAddTask(taskTitle, priority, status);
                  setTaskTitle("");
                  setPriority("Medium");
                  setShowForm(false);
                }}
              >
                Add task
              </button>
            </div>
          </div>
          )}
      </section>
    );
}

export default Column;