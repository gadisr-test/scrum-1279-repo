import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
describe('App component rendering', () => {
  test('renders App component and checks for welcome text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});