import { NavBar } from './frames/navBar';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './frames/footer';
import './scss/admin.scss';

export const RaceAdmin = () => {
  const activeRoute = useLocation();
  const currentUrl = activeRoute.pathname;

  return (
    <div className='frame'>
      <h3>THE RACE BUILDER</h3>
      <NavBar />
      <div className='content'>
        {currentUrl == '/race/' ? (
          <span className='temp-message'>
            Use Menubar above to navigate around this race data.
            <br />
            For this release there is only 1 trackable race.
          </span>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};
