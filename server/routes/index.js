import users from './user.js';

const defaultPageLoad = () => {
  return 'howdy';
};

const mountRoutes = (app) => {
  app.use('/', defaultPageLoad);
  app.use('/users', users);
};

export default mountRoutes;
