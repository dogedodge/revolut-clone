import express from 'express';
import cookieParser from 'cookie-parser';
import { body, param } from 'express-validator';
import { userLogin } from './db/userLogin';
import { getUserAccounts } from './db/getUserAccounts';
import { getAccountRecords } from './db/getAccountRecords';
import { tranferCredits } from './db/transferCredits';
import { unhandledExeptionMiddleware } from './middlewares/unhandledExeptionMiddleware';
import { createDBContextMiddleware } from './middlewares/createDBContextMiddleware';
import { inputValidationMiddleware } from './middlewares/inputValidationMiddleware';
import { VALID_CURRENCIES } from './constants';
import { reportBadRequestMiddleware } from './middlewares/reportBadRequestMiddleware';
import { getDBContext } from './utils/getDBContext';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(inputValidationMiddleware);
app.use(createDBContextMiddleware());

app.post(
  '/api/login',
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .custom((value) => {
      // Validate password as a SHA256 hash
      if (!/^[a-f0-9]{64}$/.test(value)) {
        throw new Error('Invalid password format');
      }
      return true;
    }),
  reportBadRequestMiddleware,
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await userLogin(getDBContext(req), email, password);
      res.cookie('user_id', user.id, { httpOnly: true });
      res.cookie('session_token', user.session_token, {
        httpOnly: true,
        secure: isProduction,
      });
      return res.json({ code: 0, user });
    } catch (err) {
      const { message } = err as Error;
      switch (message) {
        case 'Invalid email or password':
          return res.status(401).json({ code: 1, message });
        default:
          return next(err);
      }
    }
  },
);

app.get('/api/accounts', async (req, res, next) => {
  try {
    const accounts = await getUserAccounts(getDBContext(req));
    return res.json({ code: 0, accounts });
  } catch (err) {
    return next(err);
  }
});

app.get(
  '/api/accounts/:accountId/transfers',
  param('accountId')
    .notEmpty()
    .withMessage('Account ID is required')
    .isInt()
    .withMessage('Account ID must be an integer'),
  reportBadRequestMiddleware,
  async (req, res, next) => {
    const { accountId } = req.params || {};

    try {
      const transfers = await getAccountRecords(getDBContext(req), accountId);
      return res.json({ code: 0, transfers });
    } catch (err) {
      return next(err);
    }
  },
);

app.post(
  '/api/transfers',
  body('sender_id')
    .notEmpty()
    .withMessage('Sender ID is required')
    .isInt()
    .withMessage('Sender ID must be an integer'),
  body('receiver_id')
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
    const { sender_id, receiver_id, currency, amount } = req.body;

    try {
      const transfer = await tranferCredits(getDBContext(req), {
        sender_id,
        receiver_id,
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

/** caught all unhandled exception here */
app.use(unhandledExeptionMiddleware);

export default app;
