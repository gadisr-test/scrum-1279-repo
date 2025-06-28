import { render } from '@testing-library/react';
import App from '../src/App';

describe('Tailwind CSS Integration', () => {
  test('Tailwind CSS class application', () => {
    const { container } = render(<App className='bg-blue-500' />);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});