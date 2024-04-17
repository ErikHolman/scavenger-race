import './legView.scss';
import allLegs from '../../_sampleData/sampleLegs.json';
import { ViewSideBar } from '../frames/view_sideBar';

export const LegView = () => {
  return (
    <div className='leg-overview'>
      <ViewSideBar>
        <div className='list-of-legs'>
          {allLegs.map((leg, index) => {
            return <div key={index}>{leg.name}</div>;
          })}
        </div>
      </ViewSideBar>
      <div className='content-legs'>
        <div className='no-leg'>
          No Leg selected. Pick a Leg from the sidebar.
        </div>
      </div>
    </div>
  );
};
