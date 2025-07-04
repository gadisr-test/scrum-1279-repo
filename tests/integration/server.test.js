import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../../src/app';

describe('Server Initialization', () => {
  it('should start the server and listen on the specified port', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Time Zone CRUD Operations', () => {
  it('POST /timezones should add a new time zone', async () => {
    const timezoneData = { timezone_id: 'tz1' };
    const response = await request(app).post('/timezones').send(timezoneData);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Timezone added');
  });
});