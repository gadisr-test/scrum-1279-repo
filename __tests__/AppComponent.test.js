import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('AppComponent', () => {
  test('renders welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('applies Tailwind CSS styles', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(welcomeElement).toHaveClass('text-blue-500');
  });
});