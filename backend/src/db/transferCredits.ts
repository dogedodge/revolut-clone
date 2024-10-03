import { DBContext } from './DBContext';

type TransferCreditsRequest = {
  senderId: number;
  receiverId: number;
  currency: string;
  amount: number;
};

export async function tranferCredits(
  ctx: DBContext,
  req: TransferCreditsRequest,
) {
  const [result] = await ctx.pool.execute(`CALL transferCredits(?,?,?,?)`, [
    req.senderId,
    req.receiverId,
    req.currency,
    req.amount,
  ]);
  // console.log(result);
  return (result as TransferRecord[][])[0][0];
}
