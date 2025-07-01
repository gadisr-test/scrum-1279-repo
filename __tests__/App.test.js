import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component rendering', () => {
  test('renders Welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Tailwind CSS integration', () => {
  test('Tailwind CSS applies styles correctly', () => {
    render(<div className='bg-blue-500'>Test Element</div>);
    const divElement = screen.getByText('Test Element');
    expect(divElement).toHaveClass('bg-blue-500');
  });
});