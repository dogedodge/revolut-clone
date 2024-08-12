import { Pool } from 'mysql2/promise';

export type DBContext = {
  pool: Pool;
  session_token?: string;
};
