import { useState } from 'react';
import logo from '../assets/amazing-race.webp';
import './scss/login.scss';

export const Login = () => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleClick() {
    setTimeout(() => {}, 5000);
    setError('This form is not yet working, use the dev secret entrance');
  }

  return (
    <div className='login-page'>
      <div className='left'>
        <div className='logo-container'>
          <img className='logo' src={logo} alt='temp logo' />
        </div>
        <h1 className='text'>
          Snomazing
          <br />
          Race
        </h1>
      </div>
      <div className='border'></div>
      <div className='right'>
        <form id='login'>
          <div className='username-group'>
            <label>Username:</label>
            <input
              type='text'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Your name here'
            ></input>
          </div>
          <div className='password-group'>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='Your password here'
            ></input>
          </div>
          <div className='buttons'>
            <button type='submit' onClick={handleClick}>
              JOIN YOUR RACE
            </button>
            <button>DEVELOPER SECRET</button>
          </div>
        </form>
        {/* <div className='login-issue'>{error}</div>
        <span>FormData usr: {username || 'blank'}</span>
        <span>FormData pwd: {password || 'blank'}</span> */}
      </div>
    </div>
  );
};
