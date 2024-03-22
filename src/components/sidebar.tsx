import './sidebar.scss';
import { useState } from 'react';
import allUsers from '../_sampleData/sampleUsers.json';
import raceData from '../_sampleData/sampleRace.json';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  // local state
  const [sideBarVisible, setSideBarVisible] = useState(true);

  // local non-state
  const currRace = raceData[0];

  function closeSidebar() {
    setSideBarVisible(false);
  }
  function openSidebar() {
    setSideBarVisible(true);
  }

  const userList = allUsers[0];

  return (
    <>
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
                <div className='label'>
                  drivers: ({currRace.users.drivers.length})
                </div>
                <ul>
                  {currRace.users.drivers.map((driver, index) => {
                    return (
                      <div className='cloud'>
                        <Link
                          to={`/user/edit/${driver}`}
                          className='pill driver'
                          key={index}
                        >
                          {userList[driver].first_name}
                        </Link>
                      </div>
                    );
                  })}
                </ul>
                <div className='label'>
                  racers: ({currRace.users.racers.length})
                </div>
                <ul>
                  {currRace.users.racers.map((racer, index) => {
                    return (
                      <div className='cloud'>
                        <Link
                          to={`/user/edit/${racer}`}
                          className='pill racer'
                          key={index}
                        >
                          {userList[racer].first_name}
                        </Link>
                      </div>
                    );
                  })}
                </ul>
                <div className='label'>
                  judges: ({currRace.users.judges.length})
                </div>
                <ul>
                  {currRace.users.judges.map((judge, index) => {
                    return (
                      <div className='cloud'>
                        <Link
                          to={`/user/edit/${judge}`}
                          className='pill judge'
                          key={index}
                        >
                          {userList[judge].first_name}
                        </Link>
                      </div>
                    );
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
        <div className='closed-sidebar'>
          <div className='race-sidebar'>
            {!sideBarVisible && <button onClick={openSidebar}>open</button>}
          </div>
        </div>
      )}
    </>
  );
};
