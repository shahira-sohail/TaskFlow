import { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");

  function handleAdd() {
    if (!title.trim()) return;

    onAdd(title, priority);

    setTitle("");
    setPriority("High");
  }

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTask;