import { render } from '@testing-library/react';
import App from '../src/App';

describe('Tailwind CSS integration', () => {
  test('applies Tailwind CSS styles to App component', () => {
    const { container } = render(<App />);
    const appDiv = container.firstChild;
    expect(appDiv).toHaveClass('app-class'); // assuming 'app-class' uses Tailwind CSS
  });
});