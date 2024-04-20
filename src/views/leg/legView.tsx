import './legView.scss';
import allLegs from '../../_sampleData/sampleLegs.json';
import allTasks from '../../_sampleData/sampleTasks.json';
import { ViewSideBar } from '../frames/view_sideBar';
import { useState } from 'react';
import { Leg } from '../../components/leg/leg';
import { Task } from '../../components/task/task';
import { AddElement } from '../../components/addElementButton';

type Leg = {
  legId: string;
  name: string;
  tasks: Array<string>;
}[];

export const LegView = () => {
  const [currentLeg, setCurrentLeg] = useState({});
  const tasksWithNames: Array<string> = [];
  let formDirty: boolean = false;
  const legs: Leg = [];

  const formUpdate = {
    leg_name: '',
    leg_tasks: [...tasksWithNames],
  };

  const buildLegs = () => {
    allLegs.forEach((leg) => {
      legs.push(leg);
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setLeg = (event: any) => {
    legs.map((leg) => {
      if (leg.legId == event.target.id) {
        setCurrentLeg(() => leg);
      }
    });
  };

  const getTaskNames = () => {
    if (Object.keys(currentLeg).length > 0) {
      for (let i = 0; i < currentLeg.tasks.length; i++) {
        let taskLoc;
        allTasks.forEach((tasks, index) => {
          if (currentLeg.tasks[i] == tasks.taskId) {
            taskLoc = index;
          }
        });
        let taskObj = {
          name: allTasks[taskLoc].name,
          id: allTasks[taskLoc].taskId,
        };
        tasksWithNames.push(taskObj);
      }
    }
  };

  const update = (item) => {
    // TODO: add form validation re: types here
    formUpdate[item.target.id] = item.target.value;
    formDirty = true;
    getTaskNames();
  };

  const resetForm = (event) => {
    // updates temp form object
    formUpdate.leg_name = '';
    formUpdate.leg_tasks = [...currentLeg.tasks];

    // force the form clear
    document.getElementById('leg_name')!.value = '';
    document.getElementById('leg_tasks')!.value = '';

    formDirty = false;

    event.preventDefault();
  };

  const submitForm = (event) => {
    if (formDirty) {
      // TODO: update with DB implementation
      console.warn(
        'this is where I would submit the data to my DB... if I HAD one',
        formUpdate
      );
    } else {
      console.error('THERE ARE NO UPDATES');
    }
    event.preventDefault();
  };

  buildLegs();
  getTaskNames();

  return (
    <div className='leg-overview'>
      <ViewSideBar>
        <div className='list-of-legs'>
          {allLegs.map((leg, index) => {
            return (
              <div
                key={index}
                id={leg.legId}
                onClick={setLeg}
                className={`leg-buttons ${
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  leg.name == (currentLeg as any).name ? 'active' : ''
                }`}
              >
                {leg.name}
              </div>
            );
          })}
          <AddElement type='leg' />
        </div>
      </ViewSideBar>
      <div className='content-legs'>
        {Object.keys(currentLeg).length > 0 ? (
          <div className='has-leg'>
            <div className='left'>
              <h2>{currentLeg.name}</h2>
              <div>
                There are currently {currentLeg.tasks.length} tasks assigned to
                this leg.
              </div>
              <form>
                <div className='form-item'>
                  <label htmlFor='leg_name'>Leg Name</label>
                  <input
                    id='leg_name'
                    placeholder={currentLeg.name}
                    onChange={update}
                  />
                </div>
                <div className='form-item'>
                  <label htmlFor='leg_tasks'>Leg Tasks</label>
                  {
                    // TODO: Replace with multiselect component - picks tasks and order
                  }
                  <input
                    id='leg_tasks'
                    className='picker'
                    placeholder={JSON.stringify(tasksWithNames)}
                    onChange={update}
                  />
                </div>
                <div className='form-buttons'>
                  <button id='reset_form' type='button' onClick={resetForm}>
                    Reset Form
                  </button>
                  <button
                    id='process_form'
                    type='submit'
                    onClick={submitForm}
                    disabled={!formDirty}
                  >
                    Update Leg
                  </button>
                </div>
              </form>
            </div>
            <div className='right'>
              <h2>Leg Preview</h2>
              <div className='preview-leg'>
                {currentLeg.tasks.map((task) => {
                  return (
                    <div key={`task-${task}`} className='card'>
                      <Task data={task} />
                    </div>
                  );
                })}
                {/* <Leg legData={currentLeg} legNumber={currentLeg.legId} /> */}
              </div>
            </div>
          </div>
        ) : (
          <div className='no-leg'>
            No Leg selected. Pick a Leg from the sidebar.
          </div>
        )}
      </div>
    </div>
  );
};
