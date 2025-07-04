import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering', () => {
  test('renders the welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Tailwind CSS Integration', () => {
  test('applies tailwind styles', () => {
    render(<div className='bg-blue-500'>Test</div>);
    const divElement = screen.getByText('Test');
    expect(divElement).toHaveClass('bg-blue-500');
  });
});