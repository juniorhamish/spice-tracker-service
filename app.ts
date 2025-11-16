import express from 'express';
import spiceRouter from './api/routes/spices.ts';
import helmet from "helmet";
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(
    cors({
        origin: [
            'https://www.dajohnston.co.uk',
            'http://localhost:5173',
            'http://localhost:5174',
            'https://generator.swagger.io',
            /^https:\/\/.*\.vercel\.app$/,
        ],
    }),
);
app.use(express.json());

app.use('/api/spices', spiceRouter);

const port = process.env.PORT ?? '3000';
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export default app;
