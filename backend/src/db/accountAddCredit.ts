import { DBContext } from './DBContext';

export async function accountAddCredit(
  ctx: DBContext,
  accountId: number | string,
  action: string,
  amount: number | string,
) {
  const [result] = await ctx.pool.execute(`CALL accountAddCredit(?,?,?,?)`, [
    ctx.userId,
    accountId,
    action,
    amount,
  ]);

  const record: TransactionRecord = (result as any)[0][0];
  return record;
}
