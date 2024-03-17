// this is the leg component, it contains tasks
import { Task } from './tasks/task';

type Props = { legIndex: number };

export const Leg = (props: Props) => {
  return (
    <div className='leg'>
      <h2>This is Leg #{props.legIndex}.</h2>
      <div>
        <div className='card'>
          <h3>Task 1</h3>
          <Task taskType='route' />
        </div>
        <div className='card'>
          <h3>Task 2</h3>
          <Task taskType='road' />
        </div>
        <div className='card'>
          <h3>Task 3</h3>
          <Task taskType='detour' />
        </div>
        <div className='card'>
          <h3>Task 4</h3>
          <Task taskType='route' />
        </div>
        <div className='card'>
          <h3>Task 5</h3>
          <Task taskType='road' />
        </div>
        <div className='card'>
          <h3>Task 6</h3>
          <Task taskType='route' />
        </div>
      </div>
    </div>
  );
};
