import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { getTransactionDetail } from './getTransactionDetail';

describe('getTransactionRecords', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
    userId: 1,
  };

  afterAll(async () => {
    await pool.end();
  });

  it('works', async () => {
    const result = await getTransactionDetail(ctx, 12);
    expect(result.id).toEqual(12);
    expect(result.recipient).toEqual('waitrose');
  });
});
