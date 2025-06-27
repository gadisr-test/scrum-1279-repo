import { render } from '@testing-library/react';
import App from '../src/App';

describe('App component rendering', () => {
  test('renders the App component and checks for welcome text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
  });
});