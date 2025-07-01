import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Rendering Test', () => {
  test('renders Welcome to WorldClock Dashboard', () => {
    render(<App />);
    expect(screen.getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
});