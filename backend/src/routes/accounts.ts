import { Router } from 'express';
import { getDBContext } from '../utils/getDBContext';
import { getTransactionRecords } from '../db/getTransactionRecords';
import { param, query } from 'express-validator';
import { reportBadRequestMiddleware } from '../middlewares/reportBadRequestMiddleware';
import { getUserAccounts } from '../db/getUserAccounts';
import { getTransferRecords } from '../db/getTransferRecords';

const router = Router();

router.get('/accounts', async (req, res, next) => {
  try {
    const accounts = await getUserAccounts(getDBContext(req));
    return res.json({ code: 0, accounts });
  } catch (err) {
    return next(err);
  }
});

/**
 * sample request: GET /api/accounts/12345/transactions?page=1&limit=20
 */
router.get(
  '/accounts/:accountId/transactions',
  param('accountId')
    .notEmpty()
    .withMessage('Account ID is required')
    .isInt()
    .withMessage('Account ID must be an integer'),
  query(['page', 'limit'])
    .notEmpty()
    .withMessage('page / limit are required')
    .isInt()
    .withMessage('page / limit must be an integer'),
  reportBadRequestMiddleware,
  async (req, res, next) => {
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
  },
);

router.get(
  '/accounts/:accountId/transfers',
  param('accountId')
    .notEmpty()
    .withMessage('Account ID is required')
    .isInt()
    .withMessage('Account ID must be an integer'),
  reportBadRequestMiddleware,
  async (req, res, next) => {
    const { accountId } = req.params || {};

    try {
      const transfers = await getTransferRecords(getDBContext(req), accountId);
      return res.json({ code: 0, transfers });
    } catch (err) {
      return next(err);
    }
  },
);

router.post('/accounts/:accountId/credit', async (req, res, next) => {
  const { accountId } = req.params || {};
  const { amount } = req.body;
});

export default router;
