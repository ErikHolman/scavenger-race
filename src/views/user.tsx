import { UserCard } from '../components/userCard';
import UserList from '../_sampleData/sampleUsers.json';
import { Link } from 'react-router-dom';
import './scss/user.scss';

export const UserView = () => {
  return (
    <div className='user-view'>
      <h1>User List</h1>
      <div className='user-count'>{UserList.length} Racers</div>
      <div className='user-list'>
        {UserList.map((person) => (
          <UserCard data={person} key={person.id} />
        ))}
      </div>
      <Link to={`/user/new`} className='add-user'>
        + ADD USER
      </Link>
    </div>
  );
};
