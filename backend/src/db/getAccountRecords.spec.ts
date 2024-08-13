import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { getAccountRecords } from './getAccountRecords';

describe('getAccountRecords', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
  };

  afterAll(async () => {
    await pool.end();
  });

  it('return empty if account id invalid', async () => {
    const records = await getAccountRecords(ctx, -1);
    expect(records.length).toEqual(0);
  });
});
