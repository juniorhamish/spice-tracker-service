import express from 'express';
import request from 'supertest';
import router from './spices.js';

describe('spices routes', () => {
  it('should return the list of spices', async () => {
    const app = express();
    app.use('/', router);

    const spices = await request(app).get('/');
    expect(spices.body).toEqual([
      { id: 1, name: 'Cinnamon' },
      { id: 2, name: 'Nutmeg' },
    ]);
  });
});
