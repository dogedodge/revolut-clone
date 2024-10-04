import { createConnectionPool } from './createConnectionPool';
import { DBContext } from './DBContext';
import { getTransferRecords } from './getTransferRecords';

describe('getTransferRecords', () => {
  const pool = createConnectionPool();
  const ctx: DBContext = {
    pool,
  };

  afterAll(async () => {
    await pool.end();
  });

  it('success', async () => {
    const records = await getTransferRecords(ctx, 4);
    expect(records.length).toEqual(2);
    expect(records[0].accountFrom).toEqual(4);
    expect(records[0].accountTo).toEqual(8);
    expect(records[0].currency).toEqual('CNY');
    expect(records[0].amount).toEqual('300.50');
  });

  it('return empty if account id invalid', async () => {
    const records = await getTransferRecords(ctx, -1);
    expect(records.length).toEqual(0);
  });
});
