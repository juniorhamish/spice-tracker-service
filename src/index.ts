import env from 'dotenv';
import express from 'express';
import createApp, { generalErrorHandler, notFoundHandler } from 'express-shared-lib';
import spiceRouter from './routes/spices.js';

env.config();

const app = express();
const api = createApp({
  jwtAudience: 'https://spice-tracker-service.dajohnston.co.uk',
  includeSpec: true,
});

api.use('/api/spices', spiceRouter);
api.use(generalErrorHandler, notFoundHandler);
app.use(api);

export default app;
