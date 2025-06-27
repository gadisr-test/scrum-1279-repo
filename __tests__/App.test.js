import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders React component with welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('Applies Tailwind CSS styles correctly', () => {
  render(<App />);
  const divElement = screen.getByTestId('tailwind-test-div');
  expect(divElement).toHaveClass('bg-blue-500 text-white');
});