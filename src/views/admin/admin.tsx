import './admin.scss';
import RaceData from '../../_sampleData/sampleRace.json';
import { useState } from 'react';
import allUsers from '../../_sampleData/sampleUsers.json';
import { AddElement } from '../../components/addElementButton';

type Event = {
  target: {
    id: string;
  };
};

type Props = {
  raceId: number | undefined;
};

export const RaceAdmin = (props: Props) => {
  const [currentRace, setCurrentRace] = useState(0);
  const [error, setError] = useState('');

  // if (props.raceId === -1 || props.raceId === undefined) {
  //   const count = RaceData.length;
  //   setCurrentRace(count);
  //   console.log('raceId undefined or -1', props.raceId, currentRace);
  // } else {
  //   setCurrentRace(props.raceId);
  //   console.log('raceId', props.raceId);
  // }

  const currentRaceObject = RaceData[currentRace];

  const userList = allUsers;
  const drivers = [];
  const racers = [];
  const judges = [];

  const populateDrivers = () => {
    currentRaceObject.users.drivers.map((driver) => {
      drivers.push(userList[driver].first_name);
    });
  };

  const populateRacers = () => {
    currentRaceObject.users.racers.map((racer) => {
      racers.push(userList[racer].first_name);
    });
  };

  const populateJudges = () => {
    currentRaceObject.users.racers.map((judge) => {
      judges.push(userList[judge].first_name);
    });
  };

  const [raceForm, setRaceForm] = useState({
    name: currentRaceObject.name,
    date: currentRaceObject.raceDate,
    time: currentRaceObject.raceStart,
    legs: [...currentRaceObject.legs],
    users: {
      drivers: drivers,
      racers: racers,
      judges: judges,
    },
  });

  const setRace = (event: Event) => {
    setCurrentRace(event.target.id);
    setRaceForm({ ...raceForm });
  };

  const handleFormUpdate = (field, value) => {
    setRaceForm({
      ...raceForm,
      [field]: [value],
    });
  };

  populateDrivers();
  populateJudges();
  populateRacers();

  return (
    <>
      <div className='side'>
        <div className='list-races'>
          {RaceData.map((race, index) => {
            return (
              <div
                className={`race-item ${index == currentRace ? 'active' : ''}`}
                id={index}
                onClick={setRace}
                key={index}
              >
                {race.name}
              </div>
            );
          })}
          <AddElement type='race' />
        </div>
      </div>
      <div className='admin-form'>
        <h2>Current Race Data</h2>
        <form>
          <div>
            <div className='form-item'>
              <label>Name</label>
              <div className='data'>
                <input
                  id='name'
                  type='text'
                  placeholder={currentRaceObject.name}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
            <div className='form-item'>
              <label>Date</label>
              <div className='data'>
                <input
                  id='date'
                  type='text'
                  placeholder={currentRaceObject.raceDate}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
            <div className='form-item'>
              <label>Start Time</label>
              <div className='data'>
                <input
                  id='start'
                  type='text'
                  placeholder={currentRaceObject.raceStart}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
            <div className='form-item'>
              <label>Legs</label>
              <div className='data'>
                <input
                  id='legs'
                  type='text'
                  placeholder={currentRaceObject.legs}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
            <div className='form-item'>
              <label>Drivers</label>
              <div className='data'>
                <input
                  id='drivers'
                  type='text'
                  placeholder={raceForm.users.drivers}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
            <div className='form-item'>
              <label>Racers</label>
              <div className='data'>
                <input
                  id='racers'
                  type='text'
                  placeholder={raceForm.users.racers}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
            <div className='form-item'>
              <label>Judges</label>
              <div className='data'>
                <input
                  id='judges'
                  type='text'
                  placeholder={raceForm.users.judges}
                  value=''
                  onChange={handleFormUpdate}
                ></input>
                <div className='error-message'>{error}</div>
              </div>
            </div>
          </div>
          <div className='form-footer'>
            <div className='buttons'>
              <button id='delete' className='form-button delete'>
                DELETE
              </button>
              <button id='submit' className='form-button submit'>
                UPDATE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
