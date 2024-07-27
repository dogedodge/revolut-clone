// import pool from './connectionPool';
import { Pool } from 'mysql2/promise';

export async function login(pool: Pool, email: string, password: string) {
  const [result] = await pool.execute(
    'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?',
    [email, password],
  );
  // await pool.end();
  console.log(result);
  return true;
}