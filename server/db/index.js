import pg from 'pg';
const { Pool } = pg;

const pool = new Pool();

export const query = (text, param) => pool.query(text, param);
