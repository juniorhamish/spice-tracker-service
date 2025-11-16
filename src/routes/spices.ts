import express from 'express';

const router = express.Router();

router.get('/', async (_req, res) => {
  res.json([
    { id: 1, name: 'Cinnamon' },
    { id: 2, name: 'Nutmeg' },
  ]);
});

export default router;
