export const SpectatorTask = (props) => {
  const taskType = props.taskType;

  return (
    <div className='task'>
      <div
        className={`task-line ${props.taskStart ? 'current' : ''} ${
          props.taskComplete ? 'complete' : ''
        }`}
      ></div>
      <div
        className={`task-element ${props.taskStart ? 'current' : ''} ${
          props.taskComplete ? 'complete' : ''
        }`}
      ></div>
    </div>
  );
};
