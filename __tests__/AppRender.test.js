import { render } from '@testing-library/react';
import App from '../src/App';
test('renders App component and checks for welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to WorldClock Dashboard')).toBeInTheDocument();
});