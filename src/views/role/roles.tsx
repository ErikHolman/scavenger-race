import './role.scss';
import allUsers from '../../_sampleData/sampleUsers.json';
import { Roles as userRole } from '../../types/roles';
import { AddElement } from '../../components/addElementButton';
import { ViewSideBar } from '../frames/view_sideBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type brokenUser = {
  id: string;
  first_name: string;
};

export const RoleView = () => {
  const stringRoles = [];
  // define active seleted role
  const [currentRole, setCurrentRole] = useState('');
  // set role arrays
  const userAdmin: Array<string> = [];
  const userDriver: Array<string> = [];
  const userJudge: Array<string> = [];
  const userRacer: Array<string> = [];
  const userSpectator: Array<string> = [];
  const userBrokenRole: Array<brokenUser> = [];
  let userRoleCounts: Array<string> = [];

  // create an array of all role tyupes
  for (const role of Object.keys(userRole)) {
    if (role.length > 1) {
      const initCap = role.replace(
        role.charAt(0),
        role.charAt(0).toUpperCase()
      );
      stringRoles.push(initCap);
    }
  }
  // get and sort users into arrays of roles
  const sortUsers = () => {
    // for each user, look at user.role and add user.first_name to role set by user.role
    for (const user of allUsers) {
      if (user.roles.length > 0) {
        user.roles.map((role) => {
          switch (role) {
            case 0:
              userAdmin.push(user.first_name);
              break;
            case 1:
              userDriver.push(user.first_name);
              break;
            case 2:
              userJudge.push(user.first_name);
              break;
            case 3:
              userRacer.push(user.first_name);
              break;
            case 4:
              userSpectator.push(user.first_name);
              break;
            default:
              userBrokenRole.push(user);
          }
        });
      }
    }
    userAdmin.sort();
    userDriver.sort();
    userJudge.sort();
    userRacer.sort();
    userSpectator.sort();
    userBrokenRole.sort();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setRole = (event: any) => {
    const id = event.target.id;
    const initCap = id.replace(id.charAt(0), id.charAt(0).toUpperCase());
    setCurrentRole(initCap);
  };

  const getUserCount = () => {
    userRoleCounts = [
      userAdmin.length.toString(),
      userDriver.length.toString(),
      userJudge.length.toString(),
      userRacer.length.toString(),
      userSpectator.length.toString(),
    ];
  };

  sortUsers();
  getUserCount();

  return (
    <div className='role-overview'>
      <ViewSideBar>
        <div className='list-roles'>
          {stringRoles.map((role, index) => {
            return (
              <div
                className={`role-item ${role == currentRole ? 'active' : ''}`}
                id={role}
                onClick={setRole}
                key={index}
              >
                <span>{role}</span> ({userRoleCounts[index]})
              </div>
            );
          })}
        </div>
        <div className='broken-roles'>
          These users have fake roles:
          {userBrokenRole.map((broken, index) => {
            return (
              <Link
                to={`/users/${broken.id}/edit`}
                id='broken'
                className='role-item'
                key={index}
              >
                {broken.first_name}
              </Link>
            );
          })}
        </div>
      </ViewSideBar>
      <div className='content-roles'>
        {currentRole.length > 0 ? (
          <div className='role-selected'>
            <h2>{currentRole}s:</h2>
            <div className='role-list'>
              {currentRole == 'Admin' &&
                userAdmin.map((user, index) => {
                  return (
                    <div key={index} className='user-pill'>
                      {user}
                    </div>
                  );
                })}
              {currentRole == 'Driver' &&
                userDriver.map((user, index) => {
                  return (
                    <div key={index} className='user-pill'>
                      {user}
                    </div>
                  );
                })}
              {currentRole == 'Judge' &&
                userJudge.map((user, index) => {
                  return (
                    <div key={index} className='user-pill'>
                      {user}
                    </div>
                  );
                })}
              {currentRole == 'Racer' &&
                userRacer.map((user, index) => {
                  return (
                    <div key={index} className='user-pill'>
                      {user}
                    </div>
                  );
                })}
              {currentRole == 'Spectator' &&
                userSpectator.map((user, index) => {
                  return (
                    <div key={index} className='user-pill'>
                      {user}
                    </div>
                  );
                })}
            </div>
            <AddElement type='user-role' />
          </div>
        ) : (
          <div className='no-role'>
            No Role selected. Pick a Role from the sidebar.
          </div>
        )}
      </div>
    </div>
  );
};
