// this is the leg component, it contains tasks
import { Task } from '../task/task';
import './leg.scss';
import { AddElement } from '../addElementButton';

export const Leg = (props) => {
  const localTasks: {
    taskId: string;
    name: string;
    type: string;
    challenge: string;
    instruction: string;
    intro: {
      challenge: string;
      instruction: string;
    };
    detourA: {
      title: string;
      challenge: string;
      instruction: string;
    };
    detourB: {
      title: string;
      challenge: string;
      instruction: string;
    };
  }[] = Object.values(props.legData);

  return (
    <div className='leg'>
      <h2>This is Leg #{props.legNumber}.</h2>
      <div>
        {localTasks.map((task) => {
          return (
            <>
              <div key={`card-${task.taskId}`} className='card'>
                <Task taskType={task.type} taskData={task} />
              </div>
            </>
          );
        })}
      </div>
      <AddElement type='task' />
    </div>
  );
};
