import React from 'react';
import { render } from '@testing-library/react';
describe('Tailwind CSS Integration', () => {
  test('applies styling correctly', () => {
    const { container } = render(<div className='bg-blue-500'>Test Style</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});