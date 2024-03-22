import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Roles } from '../../types/users';
import './navBar.scss';
// import raceData from '../_sampleData/sampleRace.json';

export const NavBar = () => {
  const activeRoleKey = Object.keys(Roles);

  const [menuItems, setMenuItems] = useState({
    'All Users': { children: [], visible: false, url: '/user/list' },
    'All Roles': {
      children: [...activeRoleKey],
      visible: false,
      url: '/role/list',
    },
    'All Legs': {
      children: ['leg 1', 'leg 2'],
      visible: false,
      url: '/leg/list',
    },
    'All Tasks': { children: [], visible: false, url: '/task/list' },
  });

  const menuItemTitles = Object.keys(menuItems);
  const menuItemContent = Object.values(menuItems);

  // const onHover = (item) => {
  //   console.log(menuItems[item]);
  //   let currentState = menuItems[item].visible;

  //   setMenuItems((menuItems[item].visible = !currentState));
  // };

  return (
    <div className='nav-bar'>
      <div className='buttons'>
        {menuItemTitles.map((item, index: number) => {
          return (
            <>
              <Link
                to={`${menuItemContent[index].url}`}
                key={`${item}-button`}
                className='menu-item'
              >
                {item}
                {menuItemContent[index].children.length > 0 && (
                  <div
                    key={`${index}`}
                    className={`drop-down ${
                      menuItemContent[index].visible ? 'open' : 'closed'
                    }`}
                  >
                    {menuItemContent[index].children.map((listItem) => {
                      return <div className='drop-down-item'>{listItem}</div>;
                    })}
                  </div>
                )}
              </Link>
            </>
          );
        })}
        {/* 
        <div className='menu-item'>
          <div onClick={onHover}>Roles</div>
          <div className={`drop-down ${dropVisible ? 'open' : ''}`}>
            {activeRoleKey.map(
              (eachRole, index) => {
                return (
                  <>
                    <div className='drop-down-item' key={index}>
                      {eachRole}
                    </div>
                  </>
                );
              },
              [Roles]
            )}
          </div>
        </div>
        <div className='menu-item'>
          <div onClick={onHover}>Legs</div>
          <div className={`drop-down ${dropVisible ? 'open' : ''}`}>
            <div className='drop-down-item'>A leg</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
