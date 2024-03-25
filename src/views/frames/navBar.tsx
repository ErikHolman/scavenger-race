import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Roles } from '../../types/users';
import './navBar.scss';
// import raceData from '../_sampleData/sampleRace.json';

type Event = {
  target: {
    id: string;
  };
};

export const NavBar = () => {
  const activeRoleKey = Object.keys(Roles);

  const [menuItems, setMenuItems] = useState({
    'Race Builder': {
      children: [],
      visible: false,
      url: '/race/builder',
      active: false,
    },
    'All Users': {
      children: [],
      visible: false,
      url: '/race/users/',
      active: false,
    },
    'All Roles': {
      children: [...activeRoleKey],
      visible: false,
      url: '/race/roles/',
      active: false,
    },
    'All Legs': {
      children: ['leg 1', 'leg 2'],
      visible: false,
      url: '/race/legs/',
      active: false,
    },
    'All Tasks': {
      children: [],
      visible: false,
      url: '/race/tasks/',
      active: false,
    },
  });

  const menuItemTitles = Object.keys(menuItems);
  const menuItemContent = Object.values(menuItems);

  const handleClick = (e: Event) => {
    const currentItem = e.target.id.toString();
    console.warn(currentItem);

    return currentItem;
  };

  return (
    <div className='nav-bar'>
      <div className='buttons'>
        {menuItemTitles.map((item, index) => {
          return (
            <>
              <Link
                to={`${menuItemContent[index].url}`}
                key={`${item}-button`}
                className={`menu-item ${item.active ? 'active' : ''}`}
                onClick={handleClick}
                id={item}
              >
                {item}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
