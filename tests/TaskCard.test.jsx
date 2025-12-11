import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskCard from '../src/components/TaskCard';

describe('TaskCard Component', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test description',
    status: 'todo'
  };

  const mockMoveTask = vi.fn();
  const mockDeleteTask = vi.fn();

  it('renders task title and description', () => {
    render(
      <TaskCard 
        task={mockTask}
        moveTask={mockMoveTask}
        deleteTask={mockDeleteTask}
        currentStatus="todo"
      />
    );
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('calls deleteTask when delete button is clicked', () => {
    render(
      <TaskCard 
        task={mockTask}
        moveTask={mockMoveTask}
        deleteTask={mockDeleteTask}
        currentStatus="todo"
      />
    );
    
    const deleteButton = screen.getByTitle('Supprimer');
    fireEvent.click(deleteButton);
    
    expect(mockDeleteTask).toHaveBeenCalledWith(1);
  });

  it('shows move buttons for other statuses', () => {
    render(
      <TaskCard 
        task={mockTask}
        moveTask={mockMoveTask}
        deleteTask={mockDeleteTask}
        currentStatus="todo"
      />
    );
    
    // Should show buttons for inprogress and done, but not todo
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    expect(screen.getByText(/Done/i)).toBeInTheDocument();
  });

  it('calls moveTask when move button is clicked', () => {
    render(
      <TaskCard 
        task={mockTask}
        moveTask={mockMoveTask}
        deleteTask={mockDeleteTask}
        currentStatus="todo"
      />
    );
    
    const moveButton = screen.getByText(/In Progress/i);
    fireEvent.click(moveButton);
    
    expect(mockMoveTask).toHaveBeenCalledWith(1, 'inprogress');
  });
});