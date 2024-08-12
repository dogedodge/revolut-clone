import { DBContext } from './DBContext';

type TransferCreditsRequest = {
  sender_id: number;
  receiver_id: number;
  currency: string;
  amount: number;
};

export async function tranferCredits(
  ctx: DBContext,
  req: TransferCreditsRequest,
) {
  const [result] = await ctx.pool.execute(`CALL transfer_credits(?,?,?,?)`, [
    req.sender_id,
    req.receiver_id,
    req.currency,
    req.amount,
  ]);
  // console.log(result);
  return (result as TransferRecord[][])[0][0];
}
