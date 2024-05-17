import Router from 'express-promise-router';
import * as db from '../db/index.js';

const router = new Router();

export default router;

router.get('/:id', async (req, res) => {
  const { id } = req.param;
  console.log(`user requested by ID: ${id}`);
  // const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  // res.send(rows[0]);
});