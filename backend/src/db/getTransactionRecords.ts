import { DBContext } from './DBContext';

export async function getTransactionRecords(
  ctx: DBContext,
  accountId: number | string,
  page: number | string,
  limit: number | string, // records number per page
) {
  const [result] = await ctx.pool.execute(`CALL getTransferRecords(?)`, [
    accountId,
  ]);
  // console.log(result);

  return (result as TransferRecord[][])[0];
}
