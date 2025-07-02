import { describe, it, expect } from 'vitest';
import { startServer, stopServer } from '../../src/server';

describe('Node.js Backend Server', () => {
  it('should start the server without errors', async () => {
    const server = await startServer();
    expect(server.listening).toBeTruthy();
    await stopServer();
  });

  it('should handle POST /timezones to add a timezone', async () => {
    const response = await fetch('http://localhost:3000/timezones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timezone_id: 'tz1' })
    });
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({ message: 'Timezone added' });
  });
});