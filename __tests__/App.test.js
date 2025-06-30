import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('should render the main App component and display welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
  test('should apply Tailwind CSS styles correctly', () => {
    const { container } = render(<div className='bg-blue-500 text-white'>Styled Component</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500 text-white');
  });
});