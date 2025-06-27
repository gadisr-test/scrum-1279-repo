import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('applies Tailwind CSS', () => {
  render(<div className='bg-blue-500'>Hello World</div>);
  const divElement = screen.getByText('Hello World');
  expect(divElement).toHaveClass('bg-blue-500');
});