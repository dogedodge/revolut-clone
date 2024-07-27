import { createConnectionPool } from "./connectionPool";
import { login } from "./login";
import crypto from "crypto";

function sha256Hash(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

describe('DB login', () => {
  const pool = createConnectionPool();

  afterAll(async () => {
    await pool.end();
  });

  it('login success', async () => {
    const users = await login(pool, 'john.doe@example.com', sha256Hash('John'));
    expect(users.length).toEqual(1);
    const user = users[0];
    expect(user.first_name).toEqual('John');
    expect(user.email).toEqual('john.doe@example.com');
  });

  it('login fail', async () => {
    const users = await login(pool, 'john.doe@example.com', sha256Hash('Joh'));
    expect(users.length).toEqual(0);
  });

})