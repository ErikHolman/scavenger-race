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
  const currRace = raceData[0];
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
                There are:
                <ul>
                  <li>DRIVERS: {currRace.users.drivers.length}</li>
                  {/* @todo: Type issues *}
                  {/* <ul>
                    {currRace.users.drivers.map((driver: number, index: number) => {
                      <li key={index}>{driver}</li>
                    }};
                  </ul> */}
                  <li>RACERS: {currRace.users.racers.length} </li>
                  <li>JUDGES: {currRace.users.judges.length}</li>
                </ul>
                currently assigned to this race.
              </div>
              <div className='race-legs'>
                Leg List:
                <p>need to pull leg titles in a list</p>
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
