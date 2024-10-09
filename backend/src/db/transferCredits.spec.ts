import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { tranferCredits } from './transferCredits';

describe('transferCreadits', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
  };

  afterAll(async () => {
    await pool.end();
  });

  it('throw error if not enough balance', async () => {
    await expect(
      tranferCredits(ctx, {
        senderId: 1,
        receiverId: 2,
        currency: 'GBP',
        amount: 2000,
      }),
    ).rejects.toThrow('Insufficient balance');
  });

  it('throw error if wrong currency', async () => {
    await expect(
      tranferCredits(ctx, {
        senderId: 1,
        receiverId: 2,
        currency: 'HKD', // user 1 has no HKD account
        amount: 2000,
      }),
    ).rejects.toThrow('Wrong currency');
  });

  it('works', async () => {
    const record = await tranferCredits(ctx, {
      senderId: 1,
      receiverId: 2,
      currency: 'GBP', // user 1 has no HKD account
      amount: 1099,
    });

    expect(record.amount).toEqual('1099.00');
  });
});
