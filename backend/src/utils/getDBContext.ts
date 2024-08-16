import { Request } from 'express';
import { RequestWithDbContext } from '../middlewares/createDBContextMiddleware';

export function getDBContext(req: Request) {
  const { dbContext } = req as any as RequestWithDbContext;
  return dbContext;
}
