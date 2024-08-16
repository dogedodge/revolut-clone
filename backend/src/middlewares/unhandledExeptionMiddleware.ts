import { NextFunction, Request, Response } from 'express';

export const unhandledExeptionMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('unhandledExeptionMiddleware');
  const { message } = err as Error;
  console.error(err);
  return res.status(500).json({ code: 500, message });
};
