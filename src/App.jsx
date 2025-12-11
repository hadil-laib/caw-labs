import { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Exemple de tâche', description: 'Ceci est une description', status: 'todo' },
  ]);
  
  const [darkMode, setDarkMode] = useState(false);

  // Charger le mode sombre depuis localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Fonction pour basculer le mode sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !darkMode);
  };

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: 'todo'
    };
    setTasks([...tasks, newTask]);
  };

  // Fonction pour éditer une tâche
  const editTask = (taskId, newTitle, newDescription) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, title: newTitle, description: newDescription } 
        : task
    ));
  };

  // Fonction pour déplacer une tâche
  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Gestion du drag & drop
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const taskId = parseInt(draggableId);
    const newStatus = destination.droppableId;
    
    moveTask(taskId, newStatus);
  };

  // Filtrer les tâches par statut
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'inprogress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <h1>✨ Kanban Board Pro</h1>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
          </button>
        </div>
      </header>
      
      <TaskForm addTask={addTask} />
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          <Droppable droppableId="todo">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Column 
                  title="📝 To Do" 
                  tasks={todoTasks} 
                  status="todo"
                  moveTask={moveTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          
          <Droppable droppableId="inprogress">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Column 
                  title="⚙️ In Progress" 
                  tasks={inProgressTasks} 
                  status="inprogress"
                  moveTask={moveTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          
          <Droppable droppableId="done">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Column 
                  title="✅ Done" 
                  tasks={doneTasks} 
                  status="done"
                  moveTask={moveTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;