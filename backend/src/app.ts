import express from 'express';
import cookieParser from 'cookie-parser';
import { createConnectionPool } from './db/createConnectionPool';
import { DBContext } from './db/DBContext';
import { userLogin } from './db/userLogin';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get(`/`, (req, res) => {
  res.send('Hello World!');
});

const pool = createConnectionPool();

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const dbCtx: DBContext = { pool };
  try {
    const user = await userLogin(dbCtx, email, password);
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

// app.post('')

export default app;
