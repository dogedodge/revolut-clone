import fs from 'fs/promises';
import { Pool } from 'mysql2/promise';
import path from 'path';

const queryCache: { [key: string]: Promise<string> } = {};
async function loadSqlQuery(filePath: string) {
  const cache = queryCache[filePath];
  if (cache) return cache;

  const fullPath = path.join(__dirname, '../..', 'mysql', `${filePath}.sql`);
  const result = fs.readFile(fullPath, 'utf-8');
  queryCache[filePath] = result;
  return result;
}

export async function runSqlFile(
  pool: Pool,
  filePath: string,
  debug: boolean = false,
) {
  const sql = await loadSqlQuery(filePath);
  const result = await pool.query(sql);
  if (debug) console.log(filePath, result);
}
