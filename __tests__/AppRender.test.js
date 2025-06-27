import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component rendering', () => {
  test('renders Welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
});