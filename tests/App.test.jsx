import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  it('renders the Kanban Board title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Kanban Board/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders three columns', () => {
    render(<App />);
    // Utiliser getAllByRole pour trouver les headings
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings).toHaveLength(3);
    expect(headings[0]).toHaveTextContent(/To Do/i);
    expect(headings[1]).toHaveTextContent(/In Progress/i);
    expect(headings[2]).toHaveTextContent(/Done/i);
  });

  it('renders the add task button', () => {
    render(<App />);
    const addButton = screen.getByText(/Ajouter une tâche/i);
    expect(addButton).toBeInTheDocument();
  });
});