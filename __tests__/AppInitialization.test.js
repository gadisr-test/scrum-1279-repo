import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
describe('App Initialization', () => {
  test('renders App component with welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
  test('applies Tailwind CSS class to component', () => {
    const { container } = render(<div className='bg-blue-500 text-center'>Test Element</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500 text-center');
  });
});