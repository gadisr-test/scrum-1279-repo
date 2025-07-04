const request = require('supertest');
const app = require('../../app');
describe('Server startup', () => {
  it('should start the server without errors', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
describe('Timezone CRUD operations', () => {
  it('should add a timezone correctly', async () => {
    const response = await request(app).post('/timezones').send({timezone_id: 'tz1'});
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual('Timezone added');
  });
});