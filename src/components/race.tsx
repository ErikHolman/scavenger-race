import { useState } from 'react';
import { Leg } from './leg';
import './race.scss';
import raceData from '../_sampleData/sampleRace.json';
// import legData from '../_sampleData/sampleLegs.json';

// This view is the overview of the race components

export const Race = () => {
  // global state
  // none yet

  // local state
  const [sideBarVisible, setSideBarVisible] = useState(true);

  // local non-state
  const currRace = raceData[2];
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
