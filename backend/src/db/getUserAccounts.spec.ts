import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { getUserAccounts } from './getUserAccounts';

describe('getUserAccounts', () => {
  const pool = createConnectionPool();

  afterAll(async () => {
    await pool.end();
  });

  it('success', async () => {
    const ctx: DBContext = {
      pool,
      user_id: 1,
    };

    const accounts = await getUserAccounts(ctx);
    // expect(true).toBeTruthy();
    expect(accounts.length).toEqual(2);
    expect(accounts[0].currency_code).toEqual('USD');
    expect(accounts[1].currency_code).toEqual('GBP');
  });

  it('invalid user id return empty', async () => {
    const ctx: DBContext = {
      pool,
      user_id: -1,
    };
    const accounts = await getUserAccounts(ctx);
    expect(accounts.length).toEqual(0);
  });
});
