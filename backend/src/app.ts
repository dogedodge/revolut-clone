import express from 'express';
import cookieParser from 'cookie-parser';
import { createConnectionPool } from './db/createConnectionPool';
import { DBContext } from './db/DBContext';
import { userLogin } from './db/userLogin';
import { getUserAccounts } from './db/getUserAccounts';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get(`/`, (req, res) => {
  res.send('Hello World!');
});

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

app.get('/api/accounts', async (req, res) => {
  const ctx = createDBContext(req.cookies);
  try {
    const accounts = await getUserAccounts(ctx);
    res.json({ accounts });
  } catch (err) {
    const { message } = err as Error;
    res.status(500).json({ message });
  }
});

export default app;
