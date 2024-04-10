import './view_sidebar.scss';
import { useState } from 'react';

export const ViewSideBar = ({ children }) => {
  // local state
  const [sideBarVisible, setSideBarVisible] = useState(true);

  // local non-state

  function closeSidebar() {
    setSideBarVisible(false);
  }
  function openSidebar() {
    setSideBarVisible(true);
  }

  return (
    <>
      {sideBarVisible && (
        <div className='opened-sidebar'>
          {sideBarVisible && (
            <>
              <div className='top'>
                <button onClick={closeSidebar}>👈</button>
              </div>
              {children}
              <div className='note'>
                <code>Alpha Release</code>
                <div>Currently, changes will not persist.</div>
              </div>
            </>
          )}
        </div>
      )}
      {!sideBarVisible && (
        <div className='closed-sidebar'>
          <button onClick={openSidebar}>👉</button>
        </div>
      )}
    </>
  );
};
