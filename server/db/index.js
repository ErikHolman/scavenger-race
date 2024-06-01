import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'me',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'scavenger',
});

export default pool;
