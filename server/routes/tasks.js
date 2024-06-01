import Router from 'express-promise-router';
import pool from '../db/index.js';

const router = new Router();

export default router;

// Get all
router.get('/', async (req, res) => {
  try {
    const all = await pool.query('SELECT * FROM "Tasks"');
    res.json(all.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get by ID
router.get('/:task_id', async (req, res) => {
  const { task_id } = req.params;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM "Tasks" WHERE task_id = $1',
      [task_id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Add
router.post('/new', async (req, res) => {
  const newTask = req.body;
  let message = '';

  if (
    newTask.task_name == undefined ||
    newTask.task_details == undefined ||
    newTask.task_type == undefined ||
    newTask.parent_leg == undefined
  ) {
    message = 'Task is malformed, no records added';
    console.error(message);
  }

  try {
    const createNewTask = await pool.query(
      'INSERT INTO "Tasks" VALUES ($1,$2,$3,$4)',
      [
        newTask.task_name,
        newTask.task_details,
        newTask.task_type,
        newTask.parent_leg,
      ]
    );
    message = 'Task created, 1 record added.';
  } catch (error) {
    console.error(error.message);
  }

  res.json(message);
});

// Update
router.put('/:task_id', async (req, res) => {
  const { task_id } = req.params;
  const body = req.body;
  console.log(body);
  const completeMsg = '';
  try {
    console.log(task_id);
    if (body.first_name === '') {
      const updateLastName = await pool.query(
        'UPDATE "Tasks" SET last_name = $1 WHERE task_id = $2',
        [body.last_name, task_id]
      );
      completeMsg = 'last name updated';
    }

    if (body.last_name === '') {
      const updateFirstName = await pool.query(
        'UPDATE "Tasks" SET first_name = $1 WHERE task_id = $2',
        [body.first_name, task_id]
      );
      completeMsg = 'first name updated';
    }

    if (body.first_name.length > 0 && body.last_name.length > 0) {
      const updateAllName = await pool.query(
        'UPDATE "Tasks" SET first_name = $1 last_name = $2 WHERE task_id = $3',
        [body.first_name, body.last_name, task_id]
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
router.delete('/:task_id', async (req, res) => {
  try {
    const { task_id } = req.params;
    const deleteTask = await pool.query(
      'DELETE FROM "Tasks" WHERE task_id = $1',
      [task_id]
    );
    res.json('Task deleted.');
  } catch (error) {
    console.error(error.message);
  }
});
