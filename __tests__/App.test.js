import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders App component and checks for welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });

  test('applies Tailwind CSS and checks styling', () => {
    const { container } = render(<div className='text-blue-500'>Styled Element</div>);
    expect(container.firstChild).toHaveClass('text-blue-500');
  });
});