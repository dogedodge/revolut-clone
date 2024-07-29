import { isDBReturnError } from '../utils';
import { createConnectionPool } from './createConnectionPool';
import { login } from './login';
import crypto from 'crypto';

function sha256Hash(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

describe('DB login', () => {
  const pool = createConnectionPool();

  afterAll(async () => {
    await pool.end();
  });

  it('login success', async () => {
    const user = await login(pool, 'john.doe@example.com', sha256Hash('John'));
    expect(isDBReturnError(user)).toBe(false);

    if (!isDBReturnError(user)) {
      expect(user.first_name).toEqual('John');
      expect(user.email).toEqual('john.doe@example.com');
    }
  });

  it('login fail', async () => {
    const user = await login(pool, 'john.doe@example.com', sha256Hash('Joh'));
    expect(isDBReturnError(user)).toBe(true);
  });
});
