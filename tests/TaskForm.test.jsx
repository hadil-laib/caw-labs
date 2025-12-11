import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskForm from '../src/components/TaskForm';

describe('TaskForm Component', () => {
  const mockAddTask = vi.fn();

  it('renders the add task button initially', () => {
    render(<TaskForm addTask={mockAddTask} />);
    const button = screen.getByText(/Ajouter une tâche/i);
    expect(button).toBeInTheDocument();
  });

  it('shows form when add button is clicked', () => {
    render(<TaskForm addTask={mockAddTask} />);
    const openButton = screen.getByText(/Ajouter une tâche/i);
    fireEvent.click(openButton);
    
    expect(screen.getByPlaceholderText(/Titre de la tâche/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
  });

  it('calls addTask with correct values when form is submitted', () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    // Open form
    const openButton = screen.getByText(/Ajouter une tâche/i);
    fireEvent.click(openButton);
    
    // Fill form
    const titleInput = screen.getByPlaceholderText(/Titre de la tâche/i);
    const descriptionInput = screen.getByPlaceholderText(/Description/i);
    
    fireEvent.change(titleInput, { target: { value: 'New Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'Task description' } });
    
    // Submit form
    const submitButton = screen.getByText('Ajouter');
    fireEvent.click(submitButton);
    
    expect(mockAddTask).toHaveBeenCalledWith('New Task', 'Task description');
  });

  it('closes form when cancel button is clicked', () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    // Open form
    const openButton = screen.getByText(/Ajouter une tâche/i);
    fireEvent.click(openButton);
    
    // Click cancel
    const cancelButton = screen.getByText('Annuler');
    fireEvent.click(cancelButton);
    
    // Form should be closed, button should be visible again
    expect(screen.getByText(/Ajouter une tâche/i)).toBeInTheDocument();
  });

  it('does not submit form with empty title', () => {
    // Reset mock before this test
    mockAddTask.mockClear();
    
    // Mock window.alert
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<TaskForm addTask={mockAddTask} />);
    
    // Open form
    const openButton = screen.getByText(/Ajouter une tâche/i);
    fireEvent.click(openButton);
    
    // Try to submit without title (leave inputs empty)
    const submitButton = screen.getByText('Ajouter');
    fireEvent.click(submitButton);
    
    expect(alertMock).toHaveBeenCalledWith('Le titre est obligatoire !');
    expect(mockAddTask).not.toHaveBeenCalled();
    
    alertMock.mockRestore();
  });
});