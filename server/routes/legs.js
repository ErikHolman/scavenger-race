import Router from 'express-promise-router';
import pool from '../db/index.js';

const router = new Router();

export default router;

// Get all
router.get('/', async (req, res) => {
  try {
    const all = await pool.query('SELECT * FROM "Legs"');
    res.json(all.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get by ID
router.get('/:leg_id', async (req, res) => {
  const { leg_id } = req.params;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM "Legs" WHERE leg_id = $1',
      [leg_id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Add
router.post('/new', async (req, res) => {
  const newLeg = req.body;
  let message = '';

  if (newLeg.leg_name.length == 0 || newLeg.leg_details.length == 0) {
    message = 'Leg is malformed, no records added';
    console.error(message);
    res.send(message);
    return;
  }

  try {
    const createNewLeg = await pool.query(
      'INSERT INTO "Legs" (leg_name, leg_details) VALUES ($1,$2)',
      [newLeg.leg_name, newLeg.leg_details]
    );
    message = 'Leg created, 1 record added';
  } catch (error) {
    console.error(error.message);
  }

  res.json(message);
});

// Update
router.put('/:leg_id', async (req, res) => {
  const { leg_id } = req.params;
  const body = req.body;
  console.log(body);
  const completeMsg = '';
  try {
    console.log(leg_id);

    if (body.leg_details === '') {
      const updateLegName = await pool.query(
        'UPDATE "Legs" SET leg_name = $1 WHERE leg_id = $2',
        [body.leg_name, leg_id]
      );
      completeMsg = 'leg name updated';
    }

    if (body.leg_details === '') {
      const updateLegDetails = await pool.query(
        'UPDATE "Legs" SET leg_details = $1 WHERE leg_id = $2',
        [body.leg_details, leg_id]
      );
      completeMsg = 'leg details updated';
    }

    if (body.leg_name.length > 0 && body.leg_details.length > 0) {
      const updateAllLegInfo = await pool.query(
        'UPDATE "Legs" SET leg_name = $1 leg_details = $2 WHERE leg_id = $3',
        [body.leg_name, body.leg_details, leg_id]
      );
      completeMsg = 'leg updated';
    }
  } catch (error) {
    console.error('CAUGHT ERROR', error.message);
  } finally {
    res.send(completeMsg);
  }
});

// Delete
router.delete('/:leg_id', async (req, res) => {
  try {
    const { leg_id } = req.params;
    const deleteTask = await pool.query(
      'DELETE FROM "Legs" WHERE leg_id = $1',
      [leg_id]
    );
    res.json(`Leg ${leg_id} deleted.`);
  } catch (error) {
    console.error(error.message);
  }
});
