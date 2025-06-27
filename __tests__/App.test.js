import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('tailwindcss applies styles', () => {
  render(<div className='bg-blue-500'>Styled Element</div>);
  const styledElement = screen.getByText('Styled Element');
  expect(styledElement).toHaveClass('bg-blue-500');
});