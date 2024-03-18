import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ErrorPage from '../error-page.tsx';
import { RaceLanding } from '../views/raceLanding.tsx';
import { Race } from '../components/race.tsx';

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
  { path: '/race/:raceId/', element: <Race /> },
]);
