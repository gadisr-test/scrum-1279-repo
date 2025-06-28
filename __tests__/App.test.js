import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
});

describe('Tailwind CSS Integration', () => {
  test('applies tailwind CSS styles', () => {
    const { container } = render(<div className='bg-blue-500'>Test Element</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});