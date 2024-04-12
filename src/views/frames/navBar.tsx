import { NavLink } from 'react-router-dom';
import './navBar.scss';

export const NavBar = () => {
  const menuItems = [
    {
      name: 'Admin',
      url: '/race/admin',
    },
    {
      name: 'Builder',
      url: '/race/builder',
    },
    {
      name: 'Users',
      url: '/race/users/',
    },
    {
      name: 'Roles',
      url: '/race/roles/',
    },
    {
      name: 'Legs',
      url: '/race/legs/',
    },
    {
      name: 'Tasks',
      url: '/race/tasks/',
    },
  ];

  return (
    <div className='nav-bar'>
      <div className='buttons-container'>
        {menuItems.map((item, index) => {
          return (
            <>
              <NavLink
                to={`${menuItems[index].url}`}
                key={`${item.name.toLowerCase()}-button`}
                className={({ isActive }) =>
                  isActive ? 'menu-item active' : 'menu-item'
                }
                id={item.name.toLowerCase()}
                state={index}
              >
                {item.name}
              </NavLink>
            </>
          );
        })}
      </div>
    </div>
  );
};
