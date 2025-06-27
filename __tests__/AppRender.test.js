import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component rendering', () => {
  it('renders Welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});