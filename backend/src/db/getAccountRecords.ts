import { DBContext } from './DBContext';

export async function getAccountRecords(ctx: DBContext, account_id: number) {
  const [result] = await ctx.pool.execute(`CALL get_account_records(?)`, [
    account_id,
  ]);
  console.log(result);

  return (result as TransferRecord[][])[0];
}
