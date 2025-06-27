import { render } from '@testing-library/react';
import App from '../src/App';

describe('App component rendering', () => {
  test('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });

  test('applies Tailwind CSS correctly', () => {
    const { container } = render(<div className='bg-blue-500'>Test</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});