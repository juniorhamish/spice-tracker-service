import express from 'express';
import spiceRouter from './routes/spices.js';

const app = express();

app.use(express.json());
app.use('/api/spices', spiceRouter);

const port = process.env.PORT ?? '3000';
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
