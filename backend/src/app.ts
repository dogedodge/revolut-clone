import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import { createConnectionPool } from './db/createConnectionPool';
import { DBContext } from './db/DBContext';
import { userLogin } from './db/userLogin';
import { getUserAccounts } from './db/getUserAccounts';
import { getAccountRecords } from './db/getAccountRecords';
import { tranferCredits } from './db/transferCredits';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());

const pool = createConnectionPool();
function createDBContext(cookies: Cookies): DBContext {
  const user_id = parseInt(cookies.user_id);
  return {
    pool,
    user_id,
    session_token: cookies.session_token,
  };
}

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const ctx: DBContext = { pool };
  try {
    const user = await userLogin(ctx, email, password);
    res.cookie('user_id', user.id, { httpOnly: true });
    res.cookie('session_token', user.session_token, {
      httpOnly: true,
      secure: isProduction,
    });
    res.json(user);
  } catch (err) {
    const { message } = err as Error;
    res.status(401).json({ message });
  }
});

app.get('/api/accounts', async (req, res, next) => {
  const ctx = createDBContext(req.cookies);
  try {
    const accounts = await getUserAccounts(ctx);
    res.json({ accounts });
  } catch (err) {
    next(err);
  }
});

app.get('/api/accounts/:accountId/transfers', async (req, res, next) => {
  const ctx = createDBContext(req.cookies);
  const { accountId } = req.params;

  try {
    const transfers = await getAccountRecords(ctx, parseInt(accountId));
    res.json({ transfers });
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
      currency, // user 1 has no HKD account
      amount,
    });
    res.json(transfer);
  } catch (err) {
    next(err);
  }
});

/** caught all unhandled exception here */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { message } = err as Error;
  console.error(err);
  res.status(500).json({ message });
});

export default app;
