import Router from 'express-promise-router';
import pool from '../db/index.js';

const router = new Router();

export default router;

// Get all
router.get('/', async (req, res) => {
  try {
    const all = await pool.query('SELECT * FROM "Roles"');
    res.json(all.rows);
  } catch (error) {
    console.error(error.message);
  }
});
