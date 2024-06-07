import { createBrowserRouter } from 'react-router-dom';
import Tasks from '../views/tasks.tsx';
import Legs from '../views/legs.tsx';
import App from '../App.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/legs',
    element: <Legs />,
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
]);
