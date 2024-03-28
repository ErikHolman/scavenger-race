import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Roles } from '../../types/roles';
import './navBar.scss';
// import raceData from '../_sampleData/sampleRace.json';

type Event = {
  target: {
    id: string;
  };
};

export const NavBar = () => {
  const activeRoleKey = Object.keys(Roles);

  const menuItems = [
    {
      name: 'Admin',
      children: [],
      visible: false,
      url: '/race/admin',
      active: false,
    },
    {
      name: 'Builder',
      children: [],
      visible: false,
      url: '/race/builder',
      active: false,
    },
    {
      name: 'Users',
      children: [],
      visible: false,
      url: '/race/users/',
      active: false,
    },
    {
      name: 'Roles',
      children: [...activeRoleKey],
      visible: false,
      url: '/race/roles/',
      active: false,
    },
    {
      name: 'Legs',
      children: ['leg 1', 'leg 2'],
      visible: false,
      url: '/race/legs/',
      active: false,
    },
    {
      name: 'Tasks',
      children: [],
      visible: false,
      url: '/race/tasks/',
      active: false,
    },
  ];

  const [menuBar, setMenuBar] = useState(menuItems);

  return (
    <div className='nav-bar'>
      <div className='buttons'>
        {menuBar.map((item, index) => {
          return (
            <>
              <Link
                to={`${menuBar[index].url}`}
                key={`${item}-button`}
                className={`menu-item ${item.active ? 'active' : ''}`}
                id={item.name}
              >
                {item.name}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
