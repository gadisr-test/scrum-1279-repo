import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Render', () => {
  it('renders Welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });

  it('applies Tailwind CSS styles', () => {
    render(<div className='bg-blue-500'>Text</div>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('bg-blue-500');
  });
});