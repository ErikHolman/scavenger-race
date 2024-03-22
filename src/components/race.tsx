import { Leg } from './leg/leg';
import { Sidebar } from './sidebar';
import './race.scss';
import legData from '../_sampleData/sampleLegs.json';

// This view is the overview of the race components

export const Race = () => {
  // global state
  // none yet

  return (
    <div className='race-overview'>
      <Sidebar />
      <div className='race'>
        {legData.map((leg, index) => {
          return <Leg legData={leg} legNumber={index + 1} key={index} />;
        })}
      </div>
    </div>
  );
};
