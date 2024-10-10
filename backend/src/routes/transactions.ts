import { Router } from 'express';
import { getTransactionDetail } from '../db/getTransactionDetail';
import { getDBContext } from '../utils/getDBContext';

const router = Router();

router.get('/transactions/:transactionId', async (req, res, next) => {
  const { transactionId } = req.params;
  try {
    const transaction = await getTransactionDetail(
      getDBContext(req),
      transactionId,
    );
    return res.json({ code: 0, transaction });
  } catch (err) {
    return next(err);
  }
});

export default router;
