import fs from 'fs/promises';
import { Pool } from 'mysql2/promise';
import path from 'path';

const queryCache: { [key: string]: Promise<string> } = {};
export async function loadSqlQuery(filePath: string) {
  const cache = queryCache[filePath];
  if (cache) return cache;

  const fullPath = path.join(__dirname, '..', 'mysql', `${filePath}.sql`);
  const result = fs.readFile(fullPath, 'utf-8');
  queryCache[filePath] = result;
  return result;
}

export async function runSql(pool: Pool, filePath: string) {
  const sql = await loadSqlQuery(filePath);
  const result = await pool.query(sql);
  console.log(result);
}

export function isDBReturnError<T>(
  value: T | DBReturnError,
): value is DBReturnError {
  return typeof (value as DBReturnError).error === 'number';
}
