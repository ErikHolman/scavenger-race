import { Roles as userRole } from '../../types/roles';
import { Link } from 'react-router-dom';
import './userCard.scss';

type Props = {
  data: {
    id: string;
    first_name: string;
    image: string;
    last_name: string;
    roles: [];
  };
};

export const UserCard = (props: Props) => {
  const currentUserObj = props.data;

  return (
    <div className='user-card'>
      {currentUserObj.image.length > 0 && (
        <img
          src={`../../assets/${currentUserObj.image}`}
          className='user-image'
        />
      )}
      <div className='user-data'>
        <div className='user-id'>User ID - {currentUserObj.id}</div>
        <Link className='user-name' to={`/users/${currentUserObj.id}/edit`}>
          {currentUserObj.first_name} {currentUserObj.last_name}
        </Link>
        <div className='role-header'>
          <div>Roles:</div>
          <div>{currentUserObj.roles.length}</div>
        </div>
        <div className='user-role-cloud'>
          {currentUserObj.roles.length === 0 && 'No roles assigned'}
          {currentUserObj.roles.length > 0 &&
            currentUserObj.roles.map((myRole, index) => {
              return (
                <Link to={`/roles/${myRole}`} key={index} className='role-pill'>
                  {userRole[currentUserObj.roles[index]]}
                </Link>
              );
            })}
        </div>
        <Link
          className='user-delete-button'
          to={`/users/${currentUserObj.id}/delete/`}
        >
          X
        </Link>
      </div>
    </div>
  );
};
