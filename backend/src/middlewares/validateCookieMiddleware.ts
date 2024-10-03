import { NextFunction, Request, Response } from 'express';
import { cookie, validationResult } from 'express-validator';

export const validateCookieMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.path !== '/api/login') {
    const validators = [
      cookie('userId')
        .notEmpty()
        .withMessage('User ID is required')
        .isInt()
        .withMessage('User ID must be an integer'),
      cookie('sessionToken')
        .notEmpty()
        .withMessage('Session token is required')
        .isLength({ min: 36, max: 36 })
        .withMessage('Invalid session token format'),
    ];

    Promise.all(validators.map((v) => v.run(req)))
      .then(() => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          next();
        } else {
          res.status(400).json({ code: 400, errors: errors.array() });
        }
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next();
  }
};
