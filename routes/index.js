import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({
      rocket: 'falcon 1',
      status: 'OK',
      passengers: ['Rick Sanchez', 'Morty Smith', 'Summer Smith']
  });
});

export default router;
