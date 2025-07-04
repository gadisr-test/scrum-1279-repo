import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../../src/app';

describe('Server Initialization', () => {
  it('should start the server without errors', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Timezone CRUD Operations', () => {
  it('should add a new timezone', async () => {
    const timezoneData = { timezone_id: 'tz1' };
    const response = await request(app).post('/timezones').send(timezoneData);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Timezone added');
  });
});