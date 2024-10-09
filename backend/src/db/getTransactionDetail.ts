import { DBContext } from './DBContext';

export async function getTransactionDetail(
  ctx: DBContext,
  transactionId: number | string,
) {
  const [result] = await ctx.pool.execute(`CALL getTransactionDetail(?,?)`, [
    ctx.userId,
    transactionId,
  ]);

  // console.log(result);
  const detail: TransactionDetail = (result as any)[0][0];
  // console.log(result);

  return detail;
}
