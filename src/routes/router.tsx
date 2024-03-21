import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ErrorPage from '../error-page.tsx';
import { Race } from '../components/race.tsx';
import { RaceLanding } from '../views/raceLanding.tsx';
import { UserView } from '../views/user.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/race/',
    element: <RaceLanding />,
  },
  { path: `/race/:raceId/`, element: <Race /> },
  { path: '/user/list', element: <UserView /> },
  { path: `/user/edit/:userId`, element: <div>{`Edit User {:userID}`}</div> },
  { path: `/user/kill/:userId`, element: <div>{`Kill User {:userID}`}</div> },
  { path: `/user/new/`, element: <div>New User Page</div> },
]);
