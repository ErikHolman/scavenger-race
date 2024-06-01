import user from './user.js';

const mountRoutes = (app) => {
  app.get('/', async (req, res) => {
    console.log('no data here, but the request for "/" worked!');
    res.send("*keyboard klacking sounds*... I'm in.");
  });
  app.use('/users', user);
};

export default mountRoutes;
