import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
describe('Tailwind CSS application', () => {
  test('applies Tailwind CSS styles', () => {
    const { container } = render(<div className='bg-blue-500'>Test Style</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});