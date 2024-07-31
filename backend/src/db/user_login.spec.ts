import { isDBReturnError, runSql } from '../utils';
import { createConnectionPool } from './createConnectionPool';
import { user_login } from './user_login';
import crypto from 'crypto';

function sha256Hash(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

describe('user login', () => {
  const pool = createConnectionPool();

  beforeAll(async () => {
    await runSql(pool, 'procedures/user_login');
  });

  afterAll(async () => {
    await pool.end();
  });

  it('login success', async () => {
    const user = await user_login(
      pool,
      'john.doe@example.com',
      sha256Hash('John'),
    );
    // expect(isDBReturnError(user)).toBe(false);

    // if (!isDBReturnError(user)) {
    expect(user.first_name).toEqual('John');
    expect(user.email).toEqual('john.doe@example.com');
    // }
  });

  it('login fail', async () => {
    await expect(
      user_login(pool, 'john.doe@example.com', sha256Hash('Joh')),
    ).rejects.toThrow('Invalid email or password');
    // expect(isDBReturnError(user)).toBe(true);
  });
});
