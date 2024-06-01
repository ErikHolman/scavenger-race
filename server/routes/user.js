import Router from 'express-promise-router';
import pool from '../db/index.js';

const router = new Router();

export default router;

// Get all
router.get('/', async (req, res) => {
  try {
    const all = await pool.query('SELECT * FROM "Users"');
    res.json(all.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM "Users" WHERE user_id = $1',
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Add
router.post('/new', async (req, res) => {
  const newUser = req.body;
  let message = '';

  if (newUser.first_name == undefined || newUser.last_name == undefined) {
    message = 'Username is malformed, no records added';
    console.error(message);
  }

  try {
    const createNewTask = await pool.query(
      'INSERT INTO "Users" (first_name, last_name) VALUES ($1,$2)',
      [newUser.first_name, newUser.last_name]
    );
    message = 'User created, 1 record added.';
  } catch (error) {
    console.error(error.message);
  }

  res.json(message);
});

// Update
router.put('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const body = req.body;
  console.log(body);
  const completeMsg = '';
  try {
    console.log(user_id);
    if (body.first_name === '') {
      const updateLastName = await pool.query(
        'UPDATE "Users" SET last_name = $1 WHERE user_id = $2',
        [body.last_name, user_id]
      );
      completeMsg = 'last name updated';
    }

    if (body.last_name === '') {
      const updateFirstName = await pool.query(
        'UPDATE "Users" SET first_name = $1 WHERE user_id = $2',
        [body.first_name, user_id]
      );
      completeMsg = 'first name updated';
    }

    if (body.first_name.length > 0 && body.last_name.length > 0) {
      const updateAllName = await pool.query(
        'UPDATE "Users" SET first_name = $1 last_name = $2 WHERE user_id = $3',
        [body.first_name, body.last_name, user_id]
      );
      completeMsg = 'full name updated';
    }
  } catch (error) {
    console.error('ERROR', error.message);
  } finally {
    res.send(completeMsg);
  }
});

// Delete
router.delete('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const deleteUser = await pool.query(
      'DELETE FROM "Users" WHERE user_id = $1',
      [user_id]
    );
    res.json('User deleted.');
  } catch (error) {
    console.error(error.message);
  }
});
