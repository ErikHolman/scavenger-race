import user from './user.js';
import task from './tasks.js';
import leg from './legs.js';

const mountRoutes = (app) => {
  app.get('/', async (req, res) => {
    console.log('no data here, but the request for "/" worked!');
    res.send("*keyboard klacking sounds*... I'm in.");
  });
  app.use('/users', user);
  app.use('/tasks', task);
  app.use('/legs', leg);
};

export default mountRoutes;
