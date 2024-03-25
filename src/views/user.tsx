import { UserCard } from '../components/user/userCard';
import UserList from '../_sampleData/sampleUsers.json';
import { Link } from 'react-router-dom';
import { AddElement } from '../components/user/addElementButton';
import './scss/user.scss';

export const UserView = () => {
  const wholeList: object = UserList[0];
  const currentUsers = Object.keys(wholeList);

  return (
    <div className='frame'>
      <h3>THE USER LIST</h3>
      <div className='user-view'>
        <div className='user-count'>There are {currentUsers.length} Users</div>
        <div className='user-list'>
          {currentUsers.map((person: string, index: number) => (
            <UserCard data={wholeList[person]} key={currentUsers[index]} />
          ))}
        </div>
        <AddElement type='user' />
      </div>
      <div className='footer'>
        <Link to={`/race/builder`}>Back</Link>
      </div>
    </div>
  );
};
