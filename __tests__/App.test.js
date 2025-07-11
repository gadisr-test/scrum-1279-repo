import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
describe('App Component Rendering', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Welcome to WorldClock Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});