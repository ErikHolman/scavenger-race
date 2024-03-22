import { UserCard } from '../components/user/userCard';
import UserList from '../_sampleData/sampleUsers.json';
import { Link } from 'react-router-dom';
import './scss/user.scss';

export const UserView = () => {
  const wholeList = UserList[0];
  const currentUsers = Object.keys(wholeList);

  return (
    <div className='user-view'>
      <Link to={`/welcome`}>{'<- BACK'}</Link>
      <h1>User List</h1>
      <div className='user-count'>{currentUsers.length} Racers</div>
      <div className='user-list'>
        {currentUsers.map((person, index) => (
          <UserCard data={wholeList[person]} key={currentUsers[index]} />
        ))}
      </div>
      <Link to={`/user/new`} className='add-user'>
        + ADD USER
      </Link>
    </div>
  );
};
