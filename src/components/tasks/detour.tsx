// this is the detour component

export const Detour = () => {
  return (
    <div className='task detour'>
      <strong>Detour component</strong>
      <p>
        A road block requires the racer to pick between some options and
        complete that specific task.
      </p>
      <div>
        <button>Option A</button>&nbsp;&nbsp;&nbsp;
        <button>Option B</button>
      </div>
    </div>
  );
};
