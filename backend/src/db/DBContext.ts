import { Pool } from 'mysql2/promise';

export type DBContext = {
  pool: Pool;
  user_id?: number;
  session_token?: string;
};
