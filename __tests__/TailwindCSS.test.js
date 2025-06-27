import { render } from '@testing-library/react';
import App from '../src/App';
test('applies Tailwind CSS styles correctly', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('tailwind-class-name');
});