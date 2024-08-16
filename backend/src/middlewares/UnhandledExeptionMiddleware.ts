import { NextFunction, Request, Response } from 'express';

export const unhandledExeptionMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message } = err as Error;
  console.error(err);
  res.status(500).json({ code: 500, message });
};
