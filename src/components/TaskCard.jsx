import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

function TaskCard({title, priority, date, onDelete, id, onMove, moveTo, onEdit}){
    const[isEditing, setIsEditing] = useState(false);
    const[editedTitle, setEditedTitle] = useState(title);
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: id,
   });
   const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0) scale(1.05)`
        : undefined,
      zIndex: isDragging ? 1000 : "auto",
      boxShadow: isDragging
        ? "0 25px 50px rgba(0, 0, 0, 0.45)"
        : undefined,
      opacity: isDragging ? 0.9 : 1,
    };

    return(
        <article
          ref={setNodeRef}
          {...listeners}
          {...attributes}
          style={style}
          className={`task-card ${priority.toLowerCase()}`}>
            <div className="task-top">
            <span className={`priority ${priority.toLowerCase()}-badge`}>{priority}</span>
            <button className="delete-button" onPointerDown={(e) => e.stopPropagation()} onClick={() => onDelete(id)}>×</button>
            </div>



            {isEditing ? (
                <input 
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                ) : (
                    <button
                      type="button"
                      className="edit-button"
                      onPointerDown={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                      e.stopPropagation();
                      setIsEditing(true);
              }}
                >
                  ✏️
                </button>
                )
            }

            {isEditing && (
              <button
                type="button"
                className="save-button"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                e.stopPropagation();

               if (!editedTitle.trim()) return;

               onEdit(id, editedTitle);
               setIsEditing(false);
        }}
        >
               Save
            </button>
            )}

            <div className="task-footer">
            <span>{date}</span>
            {moveTo && (
              <button
              className="move-button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => onMove(id, moveTo)}
              > → </button>
            )}
            </div>
        </article>
    );
}

export default TaskCard;
