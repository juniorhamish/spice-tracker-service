import express from 'express';
import spiceRouter from './routes/spices.ts';

const app = express();

app.use(express.json());

const port = process.env.PORT ?? '3000';
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use('/api/spices', spiceRouter);
