import { Router } from 'express';
import { body } from 'express-validator';
import { reportBadRequestMiddleware } from '../middlewares/reportBadRequestMiddleware';
import { userLogin } from '../db/userLogin';
import { getDBContext } from '../utils/getDBContext';
import { isProduction } from '../constants';

const router = Router();

router.post(
  '/login',
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .custom((value) => {
      // Validate password as a SHA256 hash
      if (!/^[a-f0-9]{64}$/.test(value)) {
        throw new Error('Invalid password format');
      }
      return true;
    }),
  reportBadRequestMiddleware,
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await userLogin(getDBContext(req), email, password);
      res.cookie('userId', user.id, { httpOnly: true });
      res.cookie('sessionToken', user.sessionToken, {
        httpOnly: true,
        secure: isProduction,
      });
      return res.json({ code: 0, user });
    } catch (err) {
      const { message } = err as Error;
      switch (message) {
        case 'Invalid email or password':
          return res.status(401).json({ code: 1, message });
        default:
          return next(err);
      }
    }
  },
);

export default router;
