import fs from 'fs/promises';
import path from 'path';

export async function loadSqlQuery(filePath: string) {
  const fullPath = path.join(__dirname, '..', 'mysql', `${filePath}.sql`);
  return fs.readFile(fullPath, 'utf-8');
}
