import mysql from 'mysql2/promise';
// import fs from 'fs/promises';
// import path from 'path';
import { runSqlFile } from './runSqlFile';

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'revolut_db',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  multipleStatements: true, // Enable multiple statements
});

async function resetDB() {
  try {
    /**
     * reset tables
     */
    await runSqlFile(pool, `tables/users`);
    console.log('Table users created!');

    await runSqlFile(pool, 'tables/accounts');
    console.log('Table account created!');

    await runSqlFile(pool, 'tables/transferRecords');
    console.log('Table transferRecords created!');

    /**
     * update procedures
     */
    await runSqlFile(pool, 'procedures/userLogin');
    console.log('Users login procedure created!');

    await runSqlFile(pool, 'procedures/getUserAccounts');
    console.log('Get user accounts procedure created!');

    await runSqlFile(pool, 'procedures/getTransferRecords');
    console.log('Get account records procedure created!');

    await runSqlFile(pool, 'procedures/transferCredits');
    console.log('Transfer credits procedure created!');
  } catch (err) {
    console.error(err);
  }
}

resetDB().finally(() => {
  pool.end();
});
