import { runSql } from '../utils';
import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { tranferCredits } from './transferCredits';

describe('transfer creadits', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
  };

  beforeAll(async () => {
    await runSql(pool, 'procedures/transfer_credits');
  });

  afterAll(async () => {
    await pool.end();
  });

  xit('throw error if not enough balance', async () => {
    await expect(
      tranferCredits(ctx, {
        sender_id: 1,
        receiver_id: 2,
        currency: 'GBP',
        amount: 2000,
      }),
    ).rejects.toThrow('Insufficient balance');
  });

  it('throw error if wrong currency', async () => {
    await expect(
      tranferCredits(ctx, {
        sender_id: 1,
        receiver_id: 2,
        currency: 'HKD', // user 1 has no HKD account
        amount: 2000,
      }),
    ).rejects.toThrow('Wrong currency');
  });

  it('success', async () => {
    const record = await tranferCredits(ctx, {
      sender_id: 1,
      receiver_id: 2,
      currency: 'GBP', // user 1 has no HKD account
      amount: 10,
    });

    expect(record.amount).toEqual('10.00');
  });
});
