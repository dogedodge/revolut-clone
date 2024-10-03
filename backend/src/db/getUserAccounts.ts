import { DBContext } from './DBContext';

export async function getUserAccounts(ctx: DBContext) {
  const [result] = await ctx.pool.execute(`CALL get_user_accounts(?)`, [
    ctx.userId,
  ]);
  // console.log(result);

  return (result as Account[][])[0];
}
