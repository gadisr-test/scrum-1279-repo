import { render } from '@testing-library/react';
import App from '../src/App';

describe('Tailwind CSS Integration', () => {
  test('Tailwind CSS applies styles correctly', () => {
    const { container } = render(<div className='bg-blue-500'>Test Element</div>);
    expect(container.firstChild).toHaveClass('bg-blue-500');
  });
});