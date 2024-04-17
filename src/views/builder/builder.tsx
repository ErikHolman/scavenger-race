import { Leg } from '../../components/leg/leg';
import { Link } from 'react-router-dom';
import { ViewSideBar } from '../frames/view_sideBar';
import legData from '../../_sampleData/sampleLegs.json';
import allUsers from '../../_sampleData/sampleUsers.json';
import raceData from '../../_sampleData/sampleRace.json';
import './builder.scss';

type RaceData = {
  id: number;
  name: string;
  raceDate: string;
  raceStart: string;
  legs: Array<string>;
  users: {
    drivers: Array<string>;
    racers: Array<string>;
    judges: Array<string>;
  };
};

export const Builder = () => {
  const currRace: RaceData = raceData[0];
  const userList = allUsers;
  // todo refactor usernames in sidebar, not currently linking based on userId
  return (
    <div className='race-overview'>
      <ViewSideBar>
        <div className='race-sidebar'>
          <div className='race-data'>
            <div className='race-title'>
              Race: <span>{currRace.name}</span>
            </div>
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
          <div className='race-users'>
            <div className='user-title'>Participants</div>
            <div className='user-label'>
              Drivers: ({currRace.users.drivers.length})
            </div>
            <div className='cloud'>
              {currRace.users.drivers.map((driver, index) => {
                return (
                  <Link
                    to={`/users/${driver}/edit`}
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
                    to={`/users/${racer}/edit`}
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
                    to={`/users/${judge}/edit`}
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
                    to={`/legs/${index + 1}/edit`}
                    className='pill leg'
                    key={index}
                  >
                    leg {leg.legId}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </ViewSideBar>
      <div className='race'>
        {legData.map((leg, index) => {
          return (
            <Leg legData={leg} legNumber={(index + 1).toString()} key={index} />
          );
        })}
      </div>
    </div>
  );
};
