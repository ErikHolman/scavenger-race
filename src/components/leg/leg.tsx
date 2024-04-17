// this is the leg component, it contains tasks
import { Task } from '../task/task';
import './leg.scss';
import { AddElement } from '../addElementButton';

type Props = {
  legData: { legId: string; name: string; tasks: Array<string> };
  legNumber: string;
};

export const Leg = (props: Props) => {
  const localLeg = Object.values(props.legData.tasks);

  return (
    <div className='leg'>
      <div>
        <strong>This is Leg #{props.legNumber}.</strong>
      </div>
      <div>"{props.legData.name}"</div>
      <div>
        {localLeg.map((task) => {
          return (
            <div key={`task-${task}`} className='card'>
              <Task data={task} />
            </div>
          );
        })}
      </div>
      <AddElement type='task' />
    </div>
  );
};
