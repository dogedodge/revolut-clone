import { DBContext } from './DBContext';

export async function getTransferRecords(
  ctx: DBContext,
  accountId: number | string,
) {
  const [result] = await ctx.pool.execute(`CALL getTransferRecords(?)`, [
    accountId,
  ]);
  // console.log(result);

  return (result as TransferRecord[][])[0];
}
