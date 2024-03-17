import './task.scss';
import { Detour } from './detour';
import { RoadBlock } from './roadBlock';
import { RouteInfo } from './routeInfo';

type Props = { taskType: string };

export const Task = (props: Props) => {
  return (
    <div>
      {props.taskType == 'road' && <RoadBlock />}
      {props.taskType == 'detour' && <Detour />}
      {props.taskType == 'route' && <RouteInfo />}
    </div>
  );
};
