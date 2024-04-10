import './role.scss';
import allUsers from '../../_sampleData/sampleUsers.json';
import { Roles as userRole } from '../../types/roles';
import { AddElement } from '../../components/addElementButton';
import { ViewSideBar } from '../frames/view_sideBar';
import { useState } from 'react';

export const RoleView = () => {
  const stringRoles = [];
  // define active seleted role
  const [currentRole, setCurrentRole] = useState('');
  // set role arrays
  const userAdmin = [];
  const userDriver = [];
  const userJudge = [];
  const userRacer = [];
  const userSpectator = [];
  const userBrokenRole = [];
  let userRoleCounts = [];

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
              userBrokenRole.push(user.first_name);
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

  const setRole = (event: Event) => {
    const id = event.target.id;
    const initCap = id.replace(id.charAt(0), id.charAt(0).toUpperCase());
    setCurrentRole(initCap);
  };

  const getUserCount = () => {
    userRoleCounts = [
      userAdmin.length,
      userDriver.length,
      userJudge.length,
      userRacer.length,
      userSpectator.length,
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
          {userBrokenRole.map((broken) => {
            return <div id='broken'>{broken}</div>;
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
            No Role selected. Pick a role from the sidebar.
          </div>
        )}
      </div>
    </div>
  );
};
