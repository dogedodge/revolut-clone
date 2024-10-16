import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { getUserAccounts } from './getUserAccounts';

describe('getUserAccounts', () => {
  const pool = createConnectionPool();

  afterAll(async () => {
    await pool.end();
  });

  it('works', async () => {
    const ctx: DBContext = {
      pool,
      userId: 1,
    };

    const accounts = await getUserAccounts(ctx);
    // expect(true).toBeTruthy();
    expect(accounts.length).toEqual(2);
    expect(accounts[0].currency).toEqual('USD');
    expect(accounts[1].currency).toEqual('GBP');
  });

  it('invalid user id return empty', async () => {
    const ctx: DBContext = {
      pool,
      userId: -1,
    };
    const accounts = await getUserAccounts(ctx);
    expect(accounts.length).toEqual(0);
  });
});
