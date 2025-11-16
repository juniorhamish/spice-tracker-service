import express from 'express';

const router = express.Router();

router.get('/', async (_req, res) => {
  res.json({ id: 1, name: 'Cinnamon' });
});

export default router;
