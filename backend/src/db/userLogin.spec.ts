import { runSql } from '../utils';
import { createConnectionPool } from './createConnectionPool';
import { userLogin } from './userLogin';
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
    const user = await userLogin(
      pool,
      'john.doe@example.com',
      sha256Hash('John'),
    );

    expect(user.first_name).toEqual('John');
    expect(user.email).toEqual('john.doe@example.com');
  });

  it('login fail', async () => {
    await expect(
      userLogin(pool, 'john.doe@example.com', sha256Hash('Joh')),
    ).rejects.toThrow('Invalid email or password');
  });
});
