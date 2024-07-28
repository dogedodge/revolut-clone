import { Pool } from 'mysql2/promise';
import { loadSqlQuery } from '../utils';

export async function login(pool: Pool, email: string, password: string) {
  // const query = await loadSqlQuery('login');
  // const [result] = await pool.execute(
  //   // 'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?',
  //   query,
  //   [email, password],
  // );
  // const [result] = await pool.query(query);
  const [result] = await pool.execute(`CALL user_login(?,?)`, [
    email,
    password,
  ]);
  console.log(result);
  return (result as Array<User[]>)[0];
}
