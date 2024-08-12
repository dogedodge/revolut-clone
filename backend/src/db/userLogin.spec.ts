import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { userLogin } from './userLogin';
import crypto from 'crypto';

function sha256Hash(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

describe('userLogin', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
  };

  afterAll(async () => {
    await pool.end();
  });

  it('login success', async () => {
    const user = await userLogin(
      ctx,
      'john.doe@example.com',
      sha256Hash('John'),
    );

    expect(user.first_name).toEqual('John');
    expect(user.email).toEqual('john.doe@example.com');
  });

  it('login fail', async () => {
    await expect(
      userLogin(ctx, 'john.doe@example.com', sha256Hash('Joh')),
    ).rejects.toThrow('Invalid email or password');
  });
});
