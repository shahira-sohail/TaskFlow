import { useState, useEffect } from "react";
import Column from "./Column";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { DndContext } from "@dnd-kit/core";

function TaskBoard({searchTerm}){
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Learn React Components",
            priority: "High",
            date: "Today",
            status: "todo"
          },
          {
            id: 2,
            title: "Build the Kanban UI",
            priority: "Medium",
            date: "Tomorrow",
            status: "todo"
          },
          {
            id: 3,
            title: "Understand useState",
            priority: "Medium",
            date: "Today",
            status: "progress"
          },
          {
            id: 4,
            title: "Setup Vite Project",
            priority: "Low",
            date: "Completed",
            status: "done"
          }
        ];
    });

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title, priority, status = "todo") => {
      const newTask = {
        id: Date.now(),
        title: title,
        priority: priority,
        date: "Today",
        status: status
      };
      setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newTitle) => {
      setTasks(
        tasks.map(task =>
          task.id === id
            ? { ...task, title: newTitle }
            : task
        )
      );
    };

    const moveTask = (id, newStatus) => {
      setTasks(
        tasks.map(task =>
          task.id === id
          ?{...task, status: newStatus}
          : task
        )
      );
    };

    const handleDragEnd = (event) => {
      const { active, over } = event;

      if (!over) return;

      moveTask(active.id, over.id);
    };

    const filteredTasks = tasks.filter(task =>
      (task.title || "")
        .toLowerCase()
        .includes((searchTerm || "").toLowerCase())
    );

    return(
   <> <AddTask onAdd={addTask} />
       <DndContext onDragEnd={handleDragEnd}>
        <main className="board">
            <Column 
                title="To Do" 
                status="todo"
                count={tasks.filter(task => task.status === "todo").length}
                onAddTask={addTask}
            >
            {filteredTasks
              .filter(task => task.status === "todo")
              .map(task => (
                <TaskCard
                   key={task.id}
                   title={task.title}
                   priority={task.priority}
                   date={task.date}
                   onDelete={deleteTask}
                   id={task.id}
                   onMove={moveTask}
                   moveTo="progress"
                   onEdit={editTask}
                />
              ))}
            </Column>  

            <Column
              title="In Progress"
              status="progress"
              count={tasks.filter(task => task.status === "progress").length}
              onAddTask={addTask}
            >
              {filteredTasks
                .filter(task => task.status === "progress")
                .map(task => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    priority={task.priority}
                    date={task.date}
                    onDelete={deleteTask}
                    id={task.id}
                    onMove={moveTask}
                    moveTo="done"
                    onEdit={editTask}
                  />
                ))}
           </Column>

           <Column
            title="Done"
            status="done"
            count={tasks.filter(task => task.status === "done").length}
            onAddTask={addTask}
        >
            {filteredTasks
            .filter(task => task.status === "done")
            .map(task => (
                <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                date={task.date}
                onDelete={deleteTask}
                id={task.id}
                onMove={moveTask}
                onEdit={editTask}
                />
            ))}
        </Column>
    </main> 
    </DndContext>
    </>
    );
}

export default TaskBoard;