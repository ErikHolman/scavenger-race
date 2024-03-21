import { useState } from 'react';
import { Leg } from './leg';
import './race.scss';
import raceData from '../_sampleData/sampleRace.json';
import legData from '../_sampleData/sampleLegs.json';
import allUsers from '../_sampleData/sampleUsers.json';

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
                Welcome to {currRace.name}!<br />
                <br /> This race has {currRace.legs.length} legs and is
                scheduled to start on {currRace.raceDate} at{' '}
                {currRace.raceStart}.
              </div>
              <div className='race-users'>
                <div className='label'>participants</div>
                <span className='label'>drivers:</span> (
                {currRace.users.drivers.length})
                <ul>
                  {currRace.users.drivers.map((driver, index) => {
                    return (
                      <>
                        <li key={index}>{allUsers[`${driver}`]}</li>
                      </>
                    );
                  })}
                </ul>
                <span className='label'>racers:</span> (
                {currRace.users.racers.length})
                <ul>
                  {currRace.users.racers.map((racer, index) => {
                    return <li key={index}>{racer}</li>;
                  })}
                </ul>
                <span className='label'>judges:</span> (
                {currRace.users.judges.length})
                <ul>
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
