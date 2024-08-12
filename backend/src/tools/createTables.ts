import mysql from 'mysql2/promise';
// import fs from 'fs/promises';
// import path from 'path';
import { runSql } from '../utils';

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

async function createTables() {
  try {
    // const createTableSql = await fs.readFile(path.join(process.cwd(), 'mysql/create-tables.sql'), 'utf-8');
    await runSql(pool, `tables/users`);
    console.log('Table users created!');

    await runSql(pool, 'tables/accounts');
    console.log('Table account created!');

    await runSql(pool, 'tables/transfer_records');
    console.log('Table transfer_records created!');

    await runSql(pool, 'procedures/user_login');
    console.log('Users login procedure created!');
  } catch (err) {
    console.error(err);
  }
}

createTables().finally(() => {
  pool.end();
});

// pool.query(`CREATE TABLE employees (
//   employee_id INT AUTO_INCREMENT PRIMARY KEY,
//   first_name VARCHAR(50) NOT NULL,
//   last_name VARCHAR(50) NOT NULL,
//   email VARCHAR(100) UNIQUE NOT NULL,
//   phone_number VARCHAR(15),
//   hire_date DATE NOT NULL,
//   job_id INT NOT NULL,
//   salary DECIMAL(10, 2) CHECK (salary >= 0),
//   manager_id INT,
//   department_id INT
// );`).then(() => {
//   console.log(`DB created!`);
//   pool.end();
// })
