import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component tests', () => {
  test('renders Welcome to WorldClock Dashboard', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Tailwind CSS class application', () => {
    render(<div className='bg-blue-500'>Test Tailwind</div>);
    const divElement = screen.getByText('Test Tailwind');
    expect(divElement).toHaveClass('bg-blue-500');
  });
});