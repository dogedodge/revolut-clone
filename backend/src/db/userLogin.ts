import { DBContext } from './DBContext';

export async function userLogin(
  ctx: DBContext,
  email: string,
  password: string,
) {
  const [result] = await ctx.pool.execute(`CALL user_login(?,?)`, [
    email,
    password,
  ]);
  // console.log(result);
  return (result as User[][])[0][0];
}
