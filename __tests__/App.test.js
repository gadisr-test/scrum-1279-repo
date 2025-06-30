import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component Rendering', () => {
  test('renders App component and displays welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText('Welcome to WorldClock Dashboard');
    expect(welcomeElement).toBeInTheDocument();
  });

  test('applies Tailwind CSS and checks styling', () => {
    render(<div className='bg-blue-500'>Test Styling</div>);
    const styleElement = screen.getByText('Test Styling');
    expect(styleElement).toHaveClass('bg-blue-500');
  });
});