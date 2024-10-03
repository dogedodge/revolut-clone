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

  it('success', async () => {
    const records = await getAccountRecords(ctx, 6);
    expect(records.length).toEqual(3);
    expect(records[0].accountFrom).toEqual(2);
    expect(records[0].accountTo).toEqual(6);
    expect(records[0].currencyCode).toEqual('GBP');
    expect(records[0].amount).toEqual('50.00');
  });

  it('return empty if account id invalid', async () => {
    const records = await getAccountRecords(ctx, -1);
    expect(records.length).toEqual(0);
  });
});
