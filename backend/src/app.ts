import express from 'express';
import cookieParser from 'cookie-parser';
import { createConnectionPool } from './db/createConnectionPool';
import { DBContext } from './db/DBContext';
import { userLogin } from './db/userLogin';
import { getUserAccounts } from './db/getUserAccounts';
import { getAccountRecords } from './db/getAccountRecords';
import { tranferCredits } from './db/transferCredits';
import { unhandledExeptionMiddleware } from './middlewares/unhandledExeptionMiddleware';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());

const pool = createConnectionPool();
function createDBContext(cookies: Cookies): DBContext {
  return {
    pool,
    ...cookies,
  };
}

app.post('/api/login', async (req, res, next) => {
  const { email, password } = req.body;
  const ctx: DBContext = { pool };
  try {
    const user = await userLogin(ctx, email, password);
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
});

app.get('/api/accounts', async (req, res, next) => {
  const ctx = createDBContext(req.cookies);
  try {
    const accounts = await getUserAccounts(ctx);
    res.json({ code: 0, accounts });
  } catch (err) {
    next(err);
  }
});

app.get('/api/accounts/:accountId/transfers', async (req, res, next) => {
  const ctx = createDBContext(req.cookies);
  const { accountId } = req.params;

  try {
    const transfers = await getAccountRecords(ctx, accountId);
    res.json({ code: 0, transfers });
  } catch (err) {
    next(err);
  }
});

// todo: integrate express-validator
app.post('/api/transfers', async (req, res, next) => {
  const { sender_id, receiver_id, currency, amount } = req.body;
  const ctx = createDBContext(req.cookies);

  try {
    const transfer = await tranferCredits(ctx, {
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
