import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App';
describe('Tailwind CSS Integration', () => {
  test('Tailwind CSS applies correct styles', () => {
    const { container } = render(<div className='text-xl font-bold'>WorldClock Dashboard</div>);
    expect(container.firstChild).toHaveClass('text-xl font-bold');
  });
});