import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App component rendering', () => {
  test('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
});