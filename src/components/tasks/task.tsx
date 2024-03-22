import './task.scss';
import { Detour } from './detour';
import { Fast } from './fast';
import { RoadBlock } from './roadBlock';
import { RouteInfo } from './routeInfo';

type Props = { taskType: string; taskData: { taskId: string } };

export const Task = (props: Props) => {
  return (
    <div>
      <div className='task-id'>Task #{props.taskData.taskId}</div>
      {props.taskType == 'road' && <RoadBlock data={props.taskData} />}
      {props.taskType == 'detour' && <Detour data={props.taskData} />}
      {props.taskType == 'route' && <RouteInfo data={props.taskData} />}
      {props.taskType == 'fast' && <Fast data={props.taskData} />}
    </div>
  );
};
