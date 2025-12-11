import { Draggable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

function Column({ title, tasks, status, moveTask, deleteTask, editTask }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <div className="column-content">
        {tasks.length === 0 ? (
          <p className="empty-message">Aucune tâche</p>
        ) : (
          tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    task={task}
                    moveTask={moveTask}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    currentStatus={status}
                    isDragging={snapshot.isDragging}
                  />
                </div>
              )}
            </Draggable>
          ))
        )}
      </div>
    </div>
  );
}

export default Column;