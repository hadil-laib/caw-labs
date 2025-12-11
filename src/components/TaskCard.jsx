import { useState } from 'react';

function TaskCard({ task, moveTask, deleteTask, editTask, currentStatus, isDragging }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  // Déterminer les options de déplacement selon le statut actuel
  const getMoveOptions = () => {
    const options = [];
    
    if (currentStatus !== 'todo') {
      options.push({ label: '📝 To Do', value: 'todo' });
    }
    if (currentStatus !== 'inprogress') {
      options.push({ label: '⚙️ In Progress', value: 'inprogress' });
    }
    if (currentStatus !== 'done') {
      options.push({ label: '✅ Done', value: 'done' });
    }
    
    return options;
  };

  const moveOptions = getMoveOptions();

  const handleEditSave = () => {
    if (editTitle.trim() === '') {
      alert('Le titre est obligatoire !');
      return;
    }
    editTask(task.id, editTitle, editDescription);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="task-card editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="edit-input"
          placeholder="Titre de la tâche"
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          className="edit-textarea"
          placeholder="Description"
          rows="3"
        />
        <div className="edit-buttons">
          <button className="save-btn" onClick={handleEditSave}>
            💾 Sauvegarder
          </button>
          <button className="cancel-edit-btn" onClick={handleEditCancel}>
            ❌ Annuler
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-card ${isDragging ? 'dragging' : ''}`}>
      <div className="task-card-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions-top">
          <button 
            className="edit-btn"
            onClick={() => setIsEditing(true)}
            title="Éditer"
          >
            ✏️
          </button>
          <button 
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
            title="Supprimer"
          >
            🗑️
          </button>
        </div>
      </div>
      
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      
      {moveOptions.length > 0 && (
        <div className="task-actions">
          <span className="move-label">Déplacer vers:</span>
          <div className="move-buttons">
            {moveOptions.map(option => (
              <button
                key={option.value}
                className="move-btn"
                onClick={() => moveTask(task.id, option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="drag-indicator">
        ⋮⋮ Glisser pour déplacer
      </div>
    </div>
  );
}

export default TaskCard;