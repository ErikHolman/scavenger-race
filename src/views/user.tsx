import { UserCard } from '../components/user/userCard';
import UserList from '../_sampleData/sampleUsers.json';
import { AddElement } from '../components/user/addElementButton';
import './scss/user.scss';

export const UserView = () => {
  const wholeList: object = UserList[0];
  const currentUsers = Object.keys(wholeList);

  return (
    <div className='user-view'>
      <div className='sidebar'>
        A SIDEBAR WITH VALID CONTENT
        <div className='user-manage'>
          <div className='user-count'>
            There are {currentUsers.length} Users
          </div>
          <AddElement type='user' />
        </div>
      </div>
      <div className='user-list'>
        <div className='user-cards'>
          {currentUsers.map((person: string, index: number) => (
            <UserCard data={wholeList[person]} key={currentUsers[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};
