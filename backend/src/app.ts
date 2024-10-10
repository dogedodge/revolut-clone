import express from 'express';
import cookieParser from 'cookie-parser';
import { unhandledExeptionMiddleware } from './middlewares/unhandledExeptionMiddleware';
import { createDBContextMiddleware } from './middlewares/createDBContextMiddleware';
import { validateCookieMiddleware } from './middlewares/validateCookieMiddleware';
import loginRouter from './routes/login';
import accountRouter from './routes/accounts';
import transactionRouter from './routes/transactions';
import transferRouter from './routes/transfer';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(validateCookieMiddleware);
app.use(createDBContextMiddleware());

/**
 * routers
 */
app.use('/api', loginRouter);
app.use('/api', accountRouter);
app.use('/api', transactionRouter);
app.use('/api', transferRouter);

/** caught all unhandled exception here */
app.use(unhandledExeptionMiddleware);

export default app;
