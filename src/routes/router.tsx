import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ErrorPage from '../error-page.tsx';
import { Race } from '../components/race.tsx';
import { Welcome } from '../views/welcome.tsx';
import { UserView } from '../views/user.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/welcome/',
    element: <Welcome />,
  },
  // Race Overview route
  { path: `/race/`, element: <Race /> },
  // User routes
  { path: '/user/list', element: <UserView /> },
  { path: `/user/edit/:userId`, element: <div>Edit user page</div> },
  { path: `/user/kill/:userId`, element: <div>Kill user page</div> },
  { path: `/user/new/`, element: <div>New user page</div> },
  // Task routes
  { path: `/task/list/`, element: <div>All tasks page</div> },
  { path: `/task/edit/:taskId`, element: <div>Edit task page</div> },
  { path: `/task/kill/:taskId`, element: <div>Kill task page</div> },
  { path: `/task/new/`, element: <div>New task page</div> },
  // Leg routes
  { path: `/leg/list/`, element: <div>All legs page</div> },
  { path: `/leg/edit/:legId`, element: <div>Edit leg page</div> },
  { path: `/leg/kill/:legId`, element: <div>Kill leg page</div> },
  { path: `/leg/new/`, element: <div>New leg page</div> },
  // Role route
  { path: `/role/list/`, element: <div>All roles page</div> },
]);
