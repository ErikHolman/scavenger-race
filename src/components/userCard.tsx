import { useState } from 'react';
import { Roles as userRole } from '../types/users';
import { Link } from 'react-router-dom';
import './userCard.scss';

export const UserCard = ({ data }) => {
  console.log({ data });

  const [form, setform] = useState({
    id: 0,
    firstName: 'fnam',
    lastName: 'lnam',
    role: [],
  });

  return (
    <div className='user-card'>
      <div className='user-image'></div>
      <div className='user-data'>
        <div className='user-id'>User ID - {data.id}</div>
        <Link className='user-name' to={`/user/edit/${data.id}`}>
          {data.first_name} {data.last_name}
        </Link>
        <div className='role-header'>
          <div>Roles:</div>
          <div>EDIT ICON</div>
        </div>
        <div className='user-role-cloud'>
          {data.roles.length === 0 && 'NONE FOUND'}
          {data.roles.length > 0 &&
            data.roles.map((assignedRole: number, index: number) => {
              <Link
                className='role-pill'
                to={`/role/${assignedRole}`}
                key={index}
              >
                {userRole[assignedRole]}
              </Link>;
            })}
        </div>
        <Link className='user-kill' to={`/user/kill/${data.id}`}>
          X
        </Link>
      </div>
    </div>
  );
};
