import { Pool } from 'mysql2/promise';

export type DBContext = {
  pool: Pool;
  userId?: number | string;
  sessionToken?: string;
};
