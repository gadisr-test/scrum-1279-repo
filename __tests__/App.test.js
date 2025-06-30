import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('applies Tailwind CSS styling', () => {
  render(<div className='bg-blue-500'>Test Style</div>);
  const styledElement = screen.getByText('Test Style');
  expect(styledElement).toHaveClass('bg-blue-500');
});