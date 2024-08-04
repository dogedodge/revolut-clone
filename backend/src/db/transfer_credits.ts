import { Pool } from 'mysql2/promise';

type TransferCreditsRequest = {
  sender_id: number;
  receiver_id: number;
  currency: string;
  amount: number;
};

export async function tranfer_credits(pool: Pool, req: TransferCreditsRequest) {
  const [result] = await pool.execute(`CALL transfer_credits(?,?,?,?)`, [
    req.sender_id,
    req.receiver_id,
    req.currency,
    req.amount,
  ]);
  console.log(result);
  // return (result as User[][])[0][0];
}
