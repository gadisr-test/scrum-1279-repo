import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('applies Tailwind CSS styles correctly', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('font-bold text-xl text-center');
});