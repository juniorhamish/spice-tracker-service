import createApp, { generalErrorHandler, notFoundHandler } from 'express-shared-lib';
import spiceRouter from './routes/spices.js';

const app = createApp({
  jwtAudience: 'https://spice-tracker-service.dajohnston.co.uk',
  includeSpec: true,
});

app.use('/api/spices', spiceRouter);
app.use(generalErrorHandler, notFoundHandler);

export default app;
