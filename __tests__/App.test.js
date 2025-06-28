import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders the App component and shows welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('App component has correct Tailwind CSS styling', () => {
    render(<App />);
    const divElement = screen.getByText(/Welcome to WorldClock Dashboard/i).parentNode;
    expect(divElement).toHaveClass('bg-blue-500 text-center');
  });
});