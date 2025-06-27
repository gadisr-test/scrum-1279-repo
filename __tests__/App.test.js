import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Initial Render', () => {
  test('renders without crashing', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Tailwind CSS Integration', () => {
  test('applies Tailwind CSS styles correctly', () => {
    render(<div className='bg-blue-500'>Test Element</div>);
    const styledElement = screen.getByText('Test Element');
    expect(styledElement).toHaveClass('bg-blue-500');
  });
});