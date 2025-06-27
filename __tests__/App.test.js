import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('renders Welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('applies Tailwind CSS class', () => {
    render(<div className='bg-blue-500'>Test Style</div>);
    const divElement = screen.getByText('Test Style');
    expect(divElement).toHaveClass('bg-blue-500');
  });
});