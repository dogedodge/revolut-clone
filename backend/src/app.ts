import express from 'express';
import cookieParser from 'cookie-parser';
import { body, validationResult } from 'express-validator';
import { userLogin } from './db/userLogin';
import { getUserAccounts } from './db/getUserAccounts';
import { getAccountRecords } from './db/getAccountRecords';
import { tranferCredits } from './db/transferCredits';
import { unhandledExeptionMiddleware } from './middlewares/unhandledExeptionMiddleware';
import {
  createDBContextMiddleware,
  RequestWithDbContext,
} from './middlewares/createDBContextMiddleware';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());
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
        throw new Error('Password must be a valid SHA256 hash');
      }
      return true;
    }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ code: 400, errors: errors.array() });
    }

    const { email, password } = req.body;
    const { dbContext } = req as RequestWithDbContext;
    try {
      const user = await userLogin(dbContext, email, password);
      res.cookie('user_id', user.id, { httpOnly: true });
      res.cookie('session_token', user.session_token, {
        httpOnly: true,
        secure: isProduction,
      });
      res.json({ code: 0, user });
    } catch (err) {
      const { message } = err as Error;
      switch (message) {
        case 'Invalid email or password':
          res.status(401).json({ code: 1, message });
          break;
        default:
          next(err);
      }
    }
  },
);

app.get('/api/accounts', async (req, res, next) => {
  const { dbContext } = req as RequestWithDbContext;
  try {
    const accounts = await getUserAccounts(dbContext);
    res.json({ code: 0, accounts });
  } catch (err) {
    next(err);
  }
});

app.get('/api/accounts/:accountId/transfers', async (req, res, next) => {
  const { dbContext } = req as any as RequestWithDbContext;
  const { accountId } = req.params;

  try {
    const transfers = await getAccountRecords(dbContext, accountId);
    res.json({ code: 0, transfers });
  } catch (err) {
    next(err);
  }
});

// todo: integrate express-validator
app.post('/api/transfers', async (req, res, next) => {
  const { sender_id, receiver_id, currency, amount } = req.body;
  const { dbContext } = req as RequestWithDbContext;

  try {
    const transfer = await tranferCredits(dbContext, {
      sender_id,
      receiver_id,
      currency,
      amount,
    });
    res.json({ code: 0, transfer });
  } catch (err) {
    const { message } = err as Error;
    switch (message) {
      case 'Insufficient balance':
        res.status(400).json({ code: 1, message });
        break;
      case 'Wrong currency':
        res.status(400).json({ code: 2, message });
        break;
      default:
        next(err);
    }
  }
});

/** caught all unhandled exception here */
app.use(unhandledExeptionMiddleware);

export default app;
