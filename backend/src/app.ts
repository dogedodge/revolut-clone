import express from 'express';
import cookieParser from 'cookie-parser';
import { body, param } from 'express-validator';
import { userLogin } from './db/userLogin';
import { getUserAccounts } from './db/getUserAccounts';
import { getTransferRecords } from './db/getTransferRecords';
import { tranferCredits } from './db/transferCredits';
import { unhandledExeptionMiddleware } from './middlewares/unhandledExeptionMiddleware';
import { createDBContextMiddleware } from './middlewares/createDBContextMiddleware';
import { validateCookieMiddleware } from './middlewares/validateCookieMiddleware';
import { VALID_CURRENCIES } from './constants';
import { reportBadRequestMiddleware } from './middlewares/reportBadRequestMiddleware';
import { getDBContext } from './utils/getDBContext';
import accountRouter from './routes/accounts';
import transactionRouter from './routes/transactions';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(validateCookieMiddleware);
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
      res.cookie('userId', user.id, { httpOnly: true });
      res.cookie('sessionToken', user.sessionToken, {
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

app.post(
  '/api/transfers',
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

app.use('/api', accountRouter);
app.use('/api', transactionRouter);

/** caught all unhandled exception here */
app.use(unhandledExeptionMiddleware);

export default app;
