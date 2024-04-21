import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import ErrorPage from '../error-page.tsx';
import { Landing } from '../views/landing.tsx';
import { Builder } from '../views/builder/builder.tsx';
import { UserView } from '../views/user/users.tsx';
import { RaceAdmin } from '../views/admin/admin.tsx';
import { RoleView } from '../views/role/roles.tsx';
import { LegView } from '../views/leg/legView.tsx';
import {TaskView} from '../views/task/taskView.tsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },

  // Race admin view routes
  {
    path: `/race/`,
    element: <Landing />,
    children: [
      { path: 'admin/', element: <RaceAdmin /> },
      { path: 'new/:raceId', element: <RaceAdmin /> },
      { path: 'builder/', element: <Builder /> },
      // User routes
      { path: 'users/', element: <UserView /> },
      { path: `users/:userId/edit/`, element: <div>Edit user page</div> },
      {
        path: `users/:userId/delete/`,
        element: <div>Remove user page</div>,
      },
      { path: `users/new/`, element: <div>New user page</div> },
      // Task routes
      { path: `tasks/`, element: <TaskView />},
      { path: `tasks/:taskId/edit`, element: <div>Edit task page</div> },
      {
        path: `tasks/:taskId/delete/`,
        element: <div>Remove task page</div>,
      },
      { path: `tasks/new/`, element: <div>New task page</div> },

      // Leg routes
      { path: `legs/`, element: <LegView /> },
      { path: `legs/:legId/edit`, element: <div>Edit leg page</div> },
      { path: `legs/:legId/delete`, element: <div>Remove leg page</div> },
      { path: `legs/new/`, element: <div>New leg page</div> },
      // Role route
      { path: `roles/`, element: <RoleView /> },
      { path: `roles/:roleId`, element: <div>Specific role page</div> },
    ],
  },

  { path: `/race/spectator/`, element: <div>Spectator page</div> },
  {
    path: `/race/:racerId/:raceLocation`,
    element: (
      <div>
        <div>Racer page</div>
        <ul>
          <li>Previous Task Link?</li>
          <li>Current Task Content</li>
          <li>Next Task Link - when unlocked</li>
          <li>Current Leg Progress</li>
        </ul>
      </div>
    ),
  },
]);
