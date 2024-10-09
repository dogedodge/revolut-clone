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
    const tables = [
      'users',
      'accounts',
      'transferRecords',
      'transactionRecords',
    ];

    for (let i in tables) {
      const table = tables[i];
      await runSqlFile(pool, `tables/${table}`);
      console.log(`Table ${table} created!`);
    }

    /**
     * update procedures
     */
    const procedures = [
      'userLogin',
      'getUserAccounts',
      'getTransferRecords',
      'transferCredits',
      'getTransactionCount',
      'getTransactionRecords',
      'getTransactionDetail',
      'getTransactionRecipientStats',
    ];

    for (let i in procedures) {
      const procedure = procedures[i];
      await runSqlFile(pool, `procedures/${procedure}`);
      console.log(`Procedure ${procedure} created!`);
    }
  } catch (err) {
    console.error(err);
  }
}

resetDB().finally(() => {
  pool.end();
});
