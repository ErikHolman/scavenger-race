import { Roles as userRole } from '../../types/users';
import { Link } from 'react-router-dom';
import './userCard.scss';

export const UserCard = ({ data }) => {
  return (
    <div className='user-card'>
      {data.image.length > 0 && (
        <img src={`../../assets/${data.image}`} className='user-image' />
      )}
      <div className='user-data'>
        <div className='user-id'>User ID - {data.id}</div>
        <Link className='user-name' to={`/users/${data.id}/edit`}>
          {data.first_name} {data.last_name}
        </Link>
        <div className='role-header'>
          <div>Roles:</div>
          <div>✍️</div>
        </div>
        <div className='user-role-cloud'>
          {data.roles.length === 0 && 'NONE FOUND'}
          {data.roles.length > 0 &&
            data.roles.map((assignedRole: number, index: number) => {
              <Link
                className='role-pill'
                to={`/roles/${assignedRole}`}
                key={index}
              >
                {userRole[assignedRole]}
              </Link>;
            })}
        </div>
        <Link className='user-kill' to={`/users/${data.id}/delete/`}>
          X
        </Link>
      </div>
    </div>
  );
};
