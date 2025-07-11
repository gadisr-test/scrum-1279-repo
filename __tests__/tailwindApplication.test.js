import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
describe('Tailwind CSS integration', () => {
  test('applies tailwind styles correctly', () => {
    const { container } = render(<div className='bg-blue-500'>Test Element</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});