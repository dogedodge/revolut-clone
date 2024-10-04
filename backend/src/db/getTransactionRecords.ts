import { DBContext } from './DBContext';

export async function getTransactionRecords(
  ctx: DBContext,
  accountId: number | string,
  page: number | string,
  limit: number | string, // records number per page
) {
  page = Number(page);
  limit = Number(limit);

  const [count] = await ctx.pool.execute(`CALL getTransactionTotal(?,?)`, [
    ctx.userId,
    accountId,
  ]);
  const totalCount = (count as any)[0][0]['count(id)'];

  const queryOffset = page * limit; // page start from 0

  const [result] = await ctx.pool.execute(
    `CALL getTransactionRecords(?,?,?,?)`,
    [ctx.userId, accountId, limit, queryOffset],
  );

  const transactions: TransactionRecord[] = (result as any)[0];
  console.log(result);

  return {
    totalCount,
    transactions,
  };
}
