import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432
});
pool.on('connect', (client) => {
  client.query('SET search_path TO public');
});
export default pool;
