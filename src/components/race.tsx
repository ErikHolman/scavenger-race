import { useState } from 'react';
import { Leg } from './leg';
import { Link, useParams } from 'react-router-dom';
import './race.scss';
import raceData from '@sampleD/sampleRace.json';
// import legData from '@sampleD/sampleLegs.json';

// This view is the overview of the race components

export const Race = () => {
  // global state
  // none yet

  // local state
  const [sideBarVisible, setSideBarVisible] = useState(true);

  // local non-state
  const urlParams = useParams();
  const currRace = raceData[urlParams.raceId];
  // let selectedLeg = 0;

  function closeSidebar() {
    setSideBarVisible(false);
  }
  function openSidebar() {
    setSideBarVisible(true);
  }

  return (
    <div className='race-overview'>
      {sideBarVisible && (
        <div className='opened-sidebar'>
          {sideBarVisible && (
            <div className='race-sidebar'>
              <button onClick={closeSidebar}>close</button>
              <Link to={`/race/`}>Back to Race Picker</Link>
              <div className='leg-data'>
                Welcome to {currRace.name}! This race has {currRace.legs.length}{' '}
                legs and is scheduled to start on {currRace.raceDate} at{' '}
                {currRace.raceStart}.
              </div>
              <div className='race-users'>
                Participents:
                <ul>
                  <li>DRIVERS ({currRace.users.drivers.length})</li>

                  {currRace.users.drivers.map((driver, index) => {
                    return <li key={index}>{driver}</li>;
                  })}

                  <li>RACERS ({currRace.users.racers.length})</li>

                  {currRace.users.racers.map((racer, index) => {
                    return <li key={index}>{racer}</li>;
                  })}

                  <li>JUDGES ({currRace.users.judges.length})</li>

                  {currRace.users.judges.map((judge, index) => {
                    return <li key={index}>{judge}</li>;
                  })}
                </ul>
              </div>
              <div className='race-legs'>
                Leg List:
                {currRace.legs.map((leg, index) => {
                  return <li key={index}>{leg}</li>;
                })}
              </div>
              <Link to={`/`}>Logout</Link>
            </div>
          )}
        </div>
      )}
      {!sideBarVisible && (
        <div className='race-sidebar'>
          <div className='closed-sidebar'>
            {!sideBarVisible && <button onClick={openSidebar}>open</button>}
          </div>
        </div>
      )}
      <div className='race'>
        {currRace.legs.map((index) => (
          <Leg legIndex={index} key={index} />
        ))}
      </div>
    </div>
  );
};
