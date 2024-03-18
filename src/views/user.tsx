import { Link } from 'react-router-dom';
import { Roles } from '../types/users';
import UserList from '../_sampleData/sampleUsers.json';

export const UserView = () => {
  return (
    <>
      <h1>User Page</h1>
      <div>
        {UserList.map((person) => {
          return (
            <div key={person.id}>
              <div>
                <Link to={`/user/${person.id}`}>{person.name}</Link>
              </div>
              <div>
                Their password is: {person.password}...
                <br />
                Current Roles:{' '}
                {person.roles.map((assignedRole, index) => {
                  return (
                    <>
                      <Link to={`/role/${assignedRole}`} key={index}>
                        {Roles[assignedRole]}
                      </Link>{' '}
                    </>
                  );
                })}
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
