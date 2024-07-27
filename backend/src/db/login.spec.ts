import { createConnectionPool } from "./connectionPool";
import { login } from "./login";
import crypto from "crypto";

// const crypto = require('crypto');

function sha256Hash(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

describe('DB login', () => {
  const pool = createConnectionPool();

  afterAll(async () => {
    await pool.end();
  });

  it('can login', async () => {
    const result = await login(pool, 'john.doe@example.com', sha256Hash('John'));
    expect(result).toBeTruthy();
  })
})