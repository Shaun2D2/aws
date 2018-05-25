import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({ status: 'OK', message: 'Systems are so ready!', users: ['jim', 'joe', 'john'] });
});

export default router;
