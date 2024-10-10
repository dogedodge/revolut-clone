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

  it('works', async () => {
    const result = await getTransactionRecords(ctx, 1, 2, 4);
    // expect(result).toBeDefined();
    // console.log(result);
    expect(result.totalCount).toEqual(65);
    expect(result.transactions.length).toEqual(4);
    expect(result.transactions[0].id).toEqual(61);
    expect(result.transactions[0].recipient).toEqual('mcdonalds');
  });
});
