import './racer.scss';
import { useParams } from 'react-router-dom';
import { Status } from '../../types/status';
import allUsers from '../../_sampleData/sampleUsers.json';
import allTasks from '../../_sampleData/sampleTasks.json';
import allLegs from '../../_sampleData/sampleLegs.json';
import { Popup } from '../../components/popup/popup';
import { Task, TaskParams } from '../../types/tasks';

type currentUser = {
  id?: string;
  first_name?: string;
  last_name?: string;
  image?: string;
  roles?: Array<number>;
  team?: string;
};

export const RacerView = () => {
  const { racerId } = useParams();

  //TODO This needs to be a global scope state object...
  let currentUser: currentUser = {};
  allUsers.map((user) => {
    if (user.id === racerId) {
      currentUser = user;
    }
  });

  // LEG ref and status
  const leg = allLegs.map((legItem) => {
    if (legItem.status == 1) {
      console.log('leg found');
      return legItem;
    }

    return allLegs[0];
  })[0];

  console.log(leg);

  const legNumber = leg.legId;
  const taskTotal = leg.tasks.length;

  let task: TaskParams = {};
  let taskRef = {};
  let taskNumber = 1;
  let taskStatus = 0;

  leg.tasks.map((taskItem) => {
    if (taskItem.status == 2) {
      taskNumber++;
    }

    if (taskItem.status == 0) {
      taskStatus = 0;
      taskRef = taskItem;
      return;
    }
  });

  return (
    <div className='race-view'>
      <div className='mobile-header'>
        <div className='team-info'>
          {currentUser.team === undefined
            ? 'No Team Name Found'
            : currentUser.team}
        </div>
        <div className='status'>
          <div className='leg-info'>Leg {legNumber}</div>
          <div className='task-info'>
            Task {taskNumber} of {taskTotal}
          </div>
        </div>
      </div>
      <div className='mobile-body'>
        {taskStatus == 0 && <Popup taskType='' taskTitle='' popBody='' />}
      </div>
      <div className='mobile-footer'>
        {taskStatus == 0 && (
          <div className='single-button'>
            <div className='mobile-button start' role='button'>
              :flag: START TASK :flag:
            </div>
          </div>
        )}
        {taskStatus != 0 && (
          <>
            <div className='left'>
              <div className='mobile-button hint' role='button'>
                HELP
              </div>
            </div>
            <div className='right'>
              {taskStatus == 1 && (
                <div className='mobile-button solve'>SOLVE</div>
              )}
              {taskStatus == 2 && (
                <div className='mobile-button next-task'>{'NEXT TASK ->'}</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
