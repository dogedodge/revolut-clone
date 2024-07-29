import { Pool } from 'mysql2/promise';

export async function login(pool: Pool, email: string, password: string) {
  const [result] = await pool.execute(`CALL user_login(?,?)`, [
    email,
    password,
  ]);
  console.log(result);
  return (result as Array<User[] | DBReturnError[]>)[0][0];
}
