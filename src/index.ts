import express from 'express';
import spiceRouter from './routes/spices.js';

const app = express();

app.use('/api/spices', spiceRouter);

export default app;
