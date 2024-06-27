import { Outlet, useLocation } from 'react-router-dom';

export const Content = () => {
  const activeRoute = useLocation();
  const currentUrl = activeRoute.pathname;

  return (
    <div className='content'>
      {currentUrl == '/race/' ? (
        <span className='temp-message'>
          Use Menubar above to navigate around this race data.
          <br />
          For this release there is only 1 trackable race.
        </span>
      ) : (
        <div className='view'>
          <Outlet />
        </div>
      )}
    </div>
  );
};
