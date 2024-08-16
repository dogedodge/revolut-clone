import { Pool } from 'mysql2/promise';

export type DBContext = {
  pool: Pool;
  user_id?: number | string;
  session_token?: string;
};
