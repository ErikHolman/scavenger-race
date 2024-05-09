import { SpectatorTask } from '../../components/spectator/task';
import './spectatorView.scss';

type raceDataType = Array<{
  team: { racer: string; driver: string; status: string };
  legs: Array<{
    name: string;
    tasks: Array<{
      name: string;
      started: boolean;
      completed: boolean;
    }>;
  }>;
}>;

const raceInfo = { name: 'A RACE', date: 'today, duh', legCount: 3 };
const raceData: raceDataType = [
  {
    team: { racer: 'team 1', driver: 'driver 1', status: 'Task 1 of Leg 2' },
    legs: [
      {
        name: 'The first leg',
        tasks: [
          { name: 'task 1 name', started: true, completed: true },
          { name: 'task 2 name', started: true, completed: true },
          { name: 'task 3 name', started: true, completed: true },
          { name: 'task 4 name', started: true, completed: true },
        ],
      },
      {
        name: "Now it's time",
        tasks: [
          { name: 'task 1 name', started: true, completed: false },
          { name: 'task 2 name', started: false, completed: false },
          { name: 'task 3 name', started: false, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
      {
        name: 'Finish up',
        tasks: [
          { name: 'task 1 name', started: false, completed: false },
          { name: 'task 2 name', started: false, completed: false },
          { name: 'task 3 name', started: false, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
    ],
  },
  {
    team: { racer: 'racer 2', driver: 'driver 2', status: 'Task 3 of Leg 1' },
    legs: [
      {
        name: 'leg 1',
        tasks: [
          { name: 'task 1 name', started: true, completed: true },
          { name: 'task 2 name', started: true, completed: true },
          { name: 'task 3 name', started: true, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
      {
        name: 'leg 2',
        tasks: [
          { name: 'task 1 name', started: false, completed: false },
          { name: 'task 2 name', started: false, completed: false },
          { name: 'task 3 name', started: false, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
      {
        name: 'leg s',
        tasks: [
          { name: 'task 1 name', started: false, completed: false },
          { name: 'task 2 name', started: false, completed: false },
          { name: 'task 3 name', started: false, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
    ],
  },
  {
    team: { racer: 'racer 3', driver: 'driver 3', status: 'Task 3 of Leg 1' },
    legs: [
      {
        name: 'leg 1',
        tasks: [
          { name: 'task 1 name', started: true, completed: true },
          { name: 'task 2 name', started: true, completed: true },
          { name: 'task 3 name', started: true, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
      {
        name: 'leg 2',
        tasks: [
          { name: 'task 1 name', started: false, completed: false },
          { name: 'task 2 name', started: false, completed: false },
          { name: 'task 3 name', started: false, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
      {
        name: 'leg s',
        tasks: [
          { name: 'task 1 name', started: false, completed: false },
          { name: 'task 2 name', started: false, completed: false },
          { name: 'task 3 name', started: false, completed: false },
          { name: 'task 4 name', started: false, completed: false },
        ],
      },
    ],
  },
];

export const SpectatorView = () => {
  return (
    <div className='spectator-overview'>
      <div className='race-table'>
        <div>
          <h3>{raceInfo.name}</h3>
          🗓️ {raceInfo.date}
          <hr />
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <span>{raceData[0].legs[0].name}</span>
              </th>
              <th>
                <span>{raceData[0].legs[1].name}</span>
              </th>
              <th>
                <span>{raceData[0].legs[2].name}</span>
              </th>
              <th>Team's Current Status</th>
            </tr>
          </thead>
          <tbody>
            {raceData.map((race, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span>
                      <strong>{race.team.racer}</strong>
                    </span>
                    <span>
                      <strong>{race.team.driver}</strong>
                    </span>
                  </td>
                  {race.legs.map((leg) => {
                    return (
                      <td key={leg.name}>
                        {leg.tasks.map((task) => {
                          return (
                            <SpectatorTask
                              key={task.name}
                              taskType={'route'}
                              taskName={task.name}
                              taskStart={task.started}
                              taskComplete={task.completed}
                            />
                          );
                        })}
                      </td>
                    );
                  })}
                  <td>{race.team.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
