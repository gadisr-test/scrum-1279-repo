import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('Tailwind CSS applies styles correctly', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('text-xl font-bold');
});