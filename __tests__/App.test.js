import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component tests', () => {
  test('renders Welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('applies Tailwind CSS', () => {
    render(<App />);
    const divElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(divElement).toHaveClass('tailwind-class-name');
  });
});