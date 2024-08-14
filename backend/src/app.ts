import express from 'express';
import { createConnectionPool } from './db/createConnectionPool';
import { DBContext } from './db/DBContext';
import { userLogin } from './db/userLogin';

const app = express();

app.use(express.json());

app.get(`/`, (req, res) => {
  res.send('Hello World!');
});

const pool = createConnectionPool();

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const dbCtx: DBContext = { pool };
  try {
    const user = await userLogin(dbCtx, email, password);
    res.json(user);
  } catch (err) {
    const { message } = err as Error;
    res.status(401).json({ message });
  }
});

export default app;
