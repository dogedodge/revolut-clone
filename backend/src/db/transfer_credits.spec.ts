import { runSql } from '../utils';
import { createConnectionPool } from './createConnectionPool';
import { tranfer_credits } from './transfer_credits';

describe('transfer creadits', () => {
  const pool = createConnectionPool();

  beforeAll(async () => {
    await runSql(pool, 'procedures/transfer_credits');
  });

  afterAll(async () => {
    await pool.end();
  });

  it('throw error if not enough balance', async () => {
    await expect(
      tranfer_credits(pool, {
        sender_id: 1,
        receiver_id: 2,
        currency: 'GBP',
        amount: 2000,
      }),
    ).rejects.toThrow('Insufficient balance');
  });
});
