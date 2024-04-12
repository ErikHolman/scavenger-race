import './view_sidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { toggleVisiblity } from '../../state/sidebar/sidebarSlice';

export const ViewSideBar = ({ children }) => {
  const sideBarVisible = useSelector((state: RootState) => state.sidebar.value);
  const dispatch = useDispatch();

  return (
    <>
      {sideBarVisible && (
        <div className='opened-sidebar'>
          {sideBarVisible && (
            <>
              <div className='top'>
                <button onClick={() => dispatch(toggleVisiblity())}>👈</button>
                <div className='note'>
                  <code>Alpha Release</code>
                  <div>Currently, changes will not persist.</div>
                </div>
              </div>
              {children}
            </>
          )}
        </div>
      )}
      {!sideBarVisible && (
        <div className='closed-sidebar'>
          <button onClick={() => dispatch(toggleVisiblity())}>👉</button>
        </div>
      )}
    </>
  );
};
