import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <Link to={`/`} className='footer-buttons'>
        Logout
      </Link>
      <Link to={`/race/:racerId/:raceLocation`} className='footer-buttons'>
        Join the race!
      </Link>
      <Link to={`/race/spectator/`} className='footer-buttons'>
        Go Spectator Mode
      </Link>
    </div>
  );
};
