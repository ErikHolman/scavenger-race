import './role.scss';
import {} from '../../_sampleData/sampleUsers.json';
import { Roles as userRole } from '../../types/roles';
import { AddElement } from '../../components/addElementButton';
import { useState } from 'react';

export const RoleView = () => {
  const stringRoles = [];

  const [currentRole, setCurrentRole] = useState('');
  for (const role of Object.keys(userRole)) {
    if (role.length > 1) {
      const localRole = role.toLocaleUpperCase();
      stringRoles.push(localRole);
    }
  }

  const setRole = (event: Event) => {
    setCurrentRole(event.target.id);
  };

  return (
    <div className='role-view'>
      <div className='sidebar'>
        <div className='list-roles'>
          {stringRoles.map((role, index) => {
            return (
              <div
                className={`role-item ${role == currentRole ? 'active' : ''}`}
                id={role}
                onClick={setRole}
                key={index}
              >
                {role} (user count)
              </div>
            );
          })}
        </div>
      </div>
      <div className='content-roles'>
        {currentRole.length > 0 ? (
          <div className='role-selected'>
            <h2>{currentRole}S:</h2>
            <div className='role-list'>NAMES GO HERE</div>
            <AddElement type='role' />
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
