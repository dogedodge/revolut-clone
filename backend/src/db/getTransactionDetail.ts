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

  const [_stats] = await ctx.pool.execute(
    'CALL getTransactionRecipientStats(?,?,?)',
    [ctx.userId, detail.accountId, detail.recipient],
  );
  console.log(_stats);
  const { numOfTrans, totalSpent } = (_stats as any)[0][0] as {
    numOfTrans: number;
    totalSpent: string;
  };

  return {
    ...detail,
    totalSpentAtBrand: numOfTrans,
    numberOfTransAtBrand: totalSpent,
  };
}
