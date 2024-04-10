import { UserCard } from '../../components/user/userCard';
import UserList from '../../_sampleData/sampleUsers.json';
import { AddElement } from '../../components/addElementButton';
import { ViewSideBar } from '../frames/view_sideBar';
import './user.scss';

export const UserView = () => {
  const wholeList: object = UserList;
  const currentUsers = Object.keys(wholeList);

  return (
    <div className='user-overview'>
      <ViewSideBar>
        <div className='user-sidebar-content'>
          <div className='user-manage'>
            <AddElement type='user' />
            <div className='user-count'>
              There are {currentUsers.length} Users
            </div>
          </div>
        </div>
      </ViewSideBar>
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
