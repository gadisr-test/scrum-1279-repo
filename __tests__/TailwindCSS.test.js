import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import './src/index.css';

describe('Tailwind CSS integration', () => {
  it('applies Tailwind CSS styles correctly', () => {
    const { container } = render(<div className='bg-blue-500' />);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});