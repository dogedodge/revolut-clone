import { Router } from 'express';
import { getDBContext } from '../utils/getDBContext';
import { getTransactionRecords } from '../db/getTransactionRecords';

const router = Router();
/**
 * sample request: GET /api/accounts/12345/transactions?page=1&limit=20
 */
router.get('/accounts/:accountId/transactions', async (req, res, next) => {
  const { accountId } = req.params;
  const { page, limit } = req.query;

  try {
    const result = await getTransactionRecords(
      getDBContext(req),
      accountId,
      page as string,
      limit as string,
    );
    return res.json({ code: 0, ...result });
  } catch (err) {
    return next(err);
  }
});

export default router;
