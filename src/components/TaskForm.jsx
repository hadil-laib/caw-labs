import { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier que le titre n'est pas vide
    if (title.trim() === '') {
      alert('Le titre est obligatoire !');
      return;
    }

    // Ajouter la tâche
    addTask(title, description);
    
    // Réinitialiser le formulaire
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  return (
    <div className="task-form-container">
      {!isOpen ? (
        <button 
          className="open-form-btn" 
          onClick={() => setIsOpen(true)}
        >
          ➕ Ajouter une tâche
        </button>
      ) : (
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre de la tâche *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
            autoFocus
          />
          
          <textarea
            placeholder="Description (optionnel)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-textarea"
            rows="3"
          />
          
          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Ajouter
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setIsOpen(false);
                setTitle('');
                setDescription('');
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default TaskForm;