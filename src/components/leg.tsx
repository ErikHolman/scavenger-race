// this is the leg component, it contains tasks
import { Task } from './tasks/task';
import './leg.scss';
import { Link } from 'react-router-dom';

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
      <div className='newTask'>
        <Link to={`/task/new`} className='new-task-button'>
          <div className='button-text'>+</div>
        </Link>
      </div>
    </div>
  );
};
