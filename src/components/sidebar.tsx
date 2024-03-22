import './sidebar.scss';
import { useState } from 'react';
import allUsers from '../_sampleData/sampleUsers.json';
import raceData from '../_sampleData/sampleRace.json';
import legData from '../_sampleData/sampleLegs.json';
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
              <div className='top'>
                <button onClick={closeSidebar}>👈</button>
                <div className='race-data'>
                  <div className='race-title'>Welcome to {currRace.name}!</div>
                  <div className='race-detail'>
                    <div>
                      <strong>Legs:</strong> <span>{currRace.legs.length}</span>
                    </div>
                    <div>
                      <strong>Date:</strong> <span>{currRace.raceDate}</span>
                    </div>
                    <div>
                      <strong>Start:</strong> <span>{currRace.raceStart}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='race-users'>
                <div className='user-title'>Participants</div>
                <div className='user-label'>
                  Drivers: ({currRace.users.drivers.length})
                </div>
                <div className='cloud'>
                  {currRace.users.drivers.map((driver, index) => {
                    return (
                      <Link
                        to={`/user/edit/${driver}`}
                        className='pill driver'
                        key={index}
                      >
                        {userList[driver].first_name}
                      </Link>
                    );
                  })}
                </div>
                <div className='user-label'>
                  Racers: ({currRace.users.racers.length})
                </div>
                <div className='cloud'>
                  {currRace.users.racers.map((racer, index) => {
                    return (
                      <Link
                        to={`/user/edit/${racer}`}
                        className='pill racer'
                        key={index}
                      >
                        {userList[racer].first_name}
                      </Link>
                    );
                  })}
                </div>
                <div className='user-label'>
                  Judges: ({currRace.users.judges.length})
                </div>
                <div className='cloud'>
                  {currRace.users.judges.map((judge, index) => {
                    return (
                      <Link
                        to={`/user/edit/${judge}`}
                        className='pill judge'
                        key={index}
                      >
                        {userList[judge].first_name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className='race-legs'>
                <div className='leg-title'>Leg List:</div>
                <div className='cloud'>
                  {legData.map((leg, index) => {
                    return (
                      <Link
                        to={`/leg/edit/${index + 1}`}
                        className='pill leg'
                        key={index}
                      >
                        leg {index + 1}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!sideBarVisible && (
        <div className='closed-sidebar'>
          <div className='race-sidebar'>
            {!sideBarVisible && <button onClick={openSidebar}>👉</button>}
          </div>
        </div>
      )}
    </>
  );
};
