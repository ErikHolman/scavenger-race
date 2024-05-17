import './popup.scss';

type Props = {
  task: {
    taskId: string;
    name: string;
    type: string;
    challenge?: string;
    instruction?: string;
    icon?: string;
    intro?: {
      challenge: string;
      instruction: string;
      icon: string;
    };
    detourA?: {
      title: string;
      challenge: string;
      instruction: string;
      icon: string;
    };
    detourB?: {
      title: string;
      challenge: string;
      instruction: string;
      icon: string;
    };
  };
};

export const Popup = (props: Props) => {
  const task = props.task;

  const detourA = task?.detourA;
  const detourB = task?.detourB;
  const detourInfo = task?.intro;

  return (
    <div className='popup-base'>
      <div className='popup-header'>
        <div>{task.name}</div>
      </div>
      <div className='popup-body'>
        {task.type == 'detour' && (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: `${detourInfo?.challenge}`,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `${detourInfo?.instruction}`,
              }}
            />
          </>
        )}
      </div>

      <div className='popup-footer'>
        {task.type == 'detour' && (
          <div className='detour-buttons'>
            <div className='detourA'>{detourA?.title}</div>
            <div className='icon'>{detourInfo?.icon}</div>
            <div className='detourB'>{detourB?.title}</div>
          </div>
        )}
        {task.type != 'detour' && (
          <span>
            Use the <b>START TASK</b> button below to begin this task.
          </span>
        )}
      </div>
    </div>
  );
};
