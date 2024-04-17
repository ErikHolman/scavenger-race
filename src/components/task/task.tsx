import './task.scss';
import { Detour } from './detour';
import { Fast } from './fast';
import { RoadBlock } from './roadBlock';
import { RouteInfo } from './routeInfo';
import { Link } from 'react-router-dom';
import taskLibrary from '../../_sampleData/sampleTasks.json';

type Props = {
  data: string;
};

export const Task = (props: Props) => {
  const currentTaskId = props.data;
  let currentTask;
  // eslint-disable-next-line for-direction
  for (let i = 0; i < taskLibrary.length; i++) {
    if (taskLibrary[i].taskId == currentTaskId) {
      currentTask = taskLibrary[i];
    }
  }

  return (
    <>
      <Link className='task-edit-link' to={`/tasks/${currentTaskId}/edit`}>
        <div className='task-id'>
          Task #{props.data} - {currentTask!.type}
        </div>
        {currentTask!.type == 'road' && <RoadBlock data={currentTask!} />}
        {currentTask!.type == 'detour' && <Detour data={currentTask!} />}
        {currentTask!.type == 'route' && <RouteInfo data={currentTask!} />}
        {currentTask!.type == 'fast' && <Fast data={currentTask!} />}
      </Link>
    </>
  );
};
