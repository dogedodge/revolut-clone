import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { getTransactionRecords } from './getTransactionRecords';

describe('getTransactionRecords', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
    userId: 1,
  };

  afterAll(async () => {
    await pool.end();
  });

  it('success', async () => {
    const result = await getTransactionRecords(ctx, 1, 1, 4);
    // expect(result).toBeDefined();
    expect(result.totalCount).toEqual(15);
  });
});
