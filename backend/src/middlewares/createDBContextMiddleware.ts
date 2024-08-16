import { NextFunction, Request, Response } from 'express';
import { DBContext } from '../db/DBContext';
import { createConnectionPool } from '../db/createConnectionPool';

export interface RequestWithDbContext extends Request {
  dbContext: DBContext;
}

export const createDBContextMiddleware = () => {
  const pool = createConnectionPool();
  function createDBContext(cookies: Cookies): DBContext {
    return {
      pool,
      ...cookies,
    };
  }

  return (req: Request, res: Response, next: NextFunction) => {
    // console.log('createDBContextMiddleware');

    (req as RequestWithDbContext).dbContext = createDBContext(
      req.cookies as any,
    );

    return next();
  };
};
