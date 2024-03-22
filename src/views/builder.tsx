import { NavBar } from './frames/navBar';
import { Link } from 'react-router-dom';
import { Race } from '../components/race';
import './scss/builder.scss';

export const Builder = () => {
  return (
    <div className='frame'>
      <h3>THE RACE BUILDER</h3>
      <NavBar />
      <div className='content view'>
        <Race />
      </div>
      <div className='footer'>
        <Link to={`/`} className='footer-buttons'>
          Logout
        </Link>
        <Link to={`/race/racer/:racerId`} className='footer-buttons'>
          Join the race!
        </Link>
        <Link to={`/race/spectator/`} className='footer-buttons'>
          Go Spectator Mode
        </Link>
      </div>
    </div>
  );
};
