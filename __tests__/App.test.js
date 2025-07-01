import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('applies Tailwind CSS', () => {
    render(<App />);
    const divElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(divElement).toHaveClass('text-xl font-bold');
  });
});