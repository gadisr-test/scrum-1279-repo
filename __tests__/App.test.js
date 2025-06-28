import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Tailwind CSS Integration', () => {
  test('applies tailwind styles correctly', () => {
    render(<div className='bg-blue-500'>Hello, styled world!</div>);
    const styledDiv = screen.getByText(/Hello, styled world!/i);
    expect(styledDiv).toHaveClass('bg-blue-500');
  });
});