import { Router } from 'express';
import { getDBContext } from '../utils/getDBContext';
import { body } from 'express-validator';
import { VALID_CURRENCIES } from '../constants';
import { reportBadRequestMiddleware } from '../middlewares/reportBadRequestMiddleware';
import { tranferCredits } from '../db/transferCredits';

const router = Router();

router.post(
  '/transfers',
  body('senderId')
    .notEmpty()
    .withMessage('Sender ID is required')
    .isInt()
    .withMessage('Sender ID must be an integer'),
  body('receiverId')
    .notEmpty()
    .withMessage('Receiver ID is required')
    .isInt()
    .withMessage('Receiver ID must be an integer'),
  body('currency')
    .notEmpty()
    .withMessage('Currency is required')
    .isIn(VALID_CURRENCIES)
    .withMessage('Invalid currency'),
  body('amount')
    .notEmpty()
    .withMessage('Amount is required')
    .isDecimal({ force_decimal: false, decimal_digits: '0,2' })
    .withMessage('Amount must be a decimal with up to 2 decimal places'),
  reportBadRequestMiddleware,
  async (req, res, next) => {
    const { senderId, receiverId, currency, amount } = req.body;

    try {
      const transfer = await tranferCredits(getDBContext(req), {
        senderId,
        receiverId,
        currency,
        amount,
      });
      return res.json({ code: 0, transfer });
    } catch (err) {
      const { message } = err as Error;
      switch (message) {
        case 'Insufficient balance':
          return res.status(400).json({ code: 1, message });
        case 'Wrong currency':
          return res.status(400).json({ code: 2, message });
        default:
          return next(err);
      }
    }
  },
);

export default router;
