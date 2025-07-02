import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import App from '../src/App';
describe('Server operation tests', () => {
  it('should start server without errors', async () => {
    const { getByText } = render(<App />);
    await fireEvent.click(getByText('Start Server'));
    expect(getByText('Server running on localhost:3000')).toBeInTheDocument();
  });

  it('should handle POST request to add a timezone', async () => {
    const { getByRole, findByText } = render(<App />);
    fireEvent.submit(getByRole('form', { name: 'Add Timezone' }), {timezone_id: 'tz1'});
    expect(await findByText('Timezone added')).toBeInTheDocument();
  });
});