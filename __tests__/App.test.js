import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });

  test('applies Tailwind CSS styles', () => {
    const { getByTestId } = render(<div data-testid='styled-div' className='bg-blue-500'></div>);
    const styledDiv = getByTestId('styled-div');
    expect(styledDiv).toHaveClass('bg-blue-500');
  });
});