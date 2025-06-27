import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component initial render', () => {
  test('renders the welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('applies Tailwind CSS to component', () => {
    render(<App />);
    const divElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(divElement).toHaveClass('font-bold text-xl');
  });
});