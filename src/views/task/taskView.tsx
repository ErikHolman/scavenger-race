import { ViewSideBar } from '../frames/view_sideBar';
import './taskView.scss';
import { Tasks as taskTypes } from '../../types/tasks';

type TypeProps = [string];

export const TaskView = () => {
  const stringTasks: TypeProps = [];
  // create an array of all Task types
  for (const role of Object.keys(taskTypes)) {
    if (role.length > 1) {
      const initCap = role.replace(
        role.charAt(0),
        role.charAt(0).toUpperCase()
      );
      stringTasks.push(initCap);
    }
  }
  return (
    <div className='tasks'>
      <ViewSideBar>
        {stringTasks.map((task) => {
          return (
            <>
              <div>{task}</div>
              <div className='task-card'>
                {task == 'Detour' && (
                  <>
                    <div className='detour-description'>
                      A Detour task should be used to...
                    </div>
                  </>
                )}
                {task == 'Fast' && (
                  <div className='route-description'>
                    A Fast Forward task should be used to...
                  </div>
                )}
                {task == 'Road' && (
                  <div className='road-description'>
                    A Road Block task should be used to...
                  </div>
                )}
                {task == 'Route' && (
                  <div className='route-description'>
                    A Route task should be used to...
                  </div>
                )}
              </div>
            </>
          );
        })}
      </ViewSideBar>
      <div>This is the way</div>
    </div>
  );
};
