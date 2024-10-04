import { DBContext } from './DBContext';

export async function getTransactionRecords(
  ctx: DBContext,
  accountId: number | string,
  page: number | string,
  limit: number | string, // records number per page
) {
  const [result] = await ctx.pool.execute(`CALL getTransactionTotal(?,?)`, [
    ctx.userId,
    accountId,
  ]);
  const totalCount = (result as any)[0][0]['count(id)'];

  return {
    totalCount,
  };
}
