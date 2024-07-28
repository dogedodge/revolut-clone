import { Pool } from 'mysql2/promise';
import { loadSqlQuery } from '../utils';

export async function login(pool: Pool, email: string, password: string) {
  // const q = await loadSqlQuery('login');
  // console.log(q);
  const [result] = await pool.execute(
    'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?',
    [email, password],
  );
  // console.log(result);
  return result as User[];
}
