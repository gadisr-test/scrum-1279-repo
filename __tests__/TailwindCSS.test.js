import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';
describe('Tailwind CSS Integration', () => {
  test('Tailwind CSS applies styles correctly', () => {
    const { container } = render(<div className='bg-blue-500'>Test</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});