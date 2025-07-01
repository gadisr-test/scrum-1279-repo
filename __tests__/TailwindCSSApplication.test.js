import { render } from '@testing-library/react';
import App from '../src/App';

describe('Tailwind CSS Application Test', () => {
  test('Tailwind CSS styles are applied correctly', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});