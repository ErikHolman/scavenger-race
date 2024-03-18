import { Link } from 'react-router-dom';
import raceData from '../_sampleData/sampleRace.json';

export const RaceLanding = () => {
  return (
    <>
      <h1>Pick a race:</h1>
      {raceData.map((race, index) => {
        return (
          <Link to={`/race/${index}`} key={index}>
            #{race.id} - {race.name}
          </Link>
        );
      })}
      <Link to={`/`}>Logout</Link>
    </>
  );
};
