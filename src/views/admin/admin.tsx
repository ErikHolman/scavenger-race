import './admin.scss';
import RaceData from '../../_sampleData/sampleRace.json';
import { useState } from 'react';
import RaceUsers from '../../_sampleData/sampleUsers.json';

type Event = {
  target: {
    id: string;
  };
};

export const RaceAdmin = () => {
  const [currentRace, setCurrentRace] = useState(0);
  const [error, setError] = useState('');

  const currentRaceObject = RaceData[currentRace];

  const [raceForm, setRaceForm] = useState({
    name: currentRaceObject.name,
    date: currentRaceObject.raceDate,
    time: currentRaceObject.raceStart,
    legs: [...currentRaceObject.legs],
    users: {
      drivers: [...currentRaceObject.users.drivers],
      racers: [...currentRaceObject.users.racers],
      judges: [...currentRaceObject.users.judges],
    },
  });

  const setRace = (event: Event) => {
    setCurrentRace(event.target.id);
  };

  const handleFormUpdate = (field, value) => {
    setRaceForm({
      ...raceForm,
      [field]: [value],
    });
  };

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
        </div>
        <div className='note'>
          <code>Alpha Release</code>
          <div>
            The first item in the list above is the only Race Object that is
            editible. Currently, changes do not persist.
          </div>
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
                  placeholder=''
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
                  placeholder=''
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
