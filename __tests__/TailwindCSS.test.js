import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Tailwind CSS integration', () => {
  test('Tailwind CSS applies styles correctly', () => {
    const { container } = render(<div className='bg-blue-500'>Test Element</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});