import './routeInfo.scss';

type Props = {
  data: {
    taskId: string;
    name: string;
    type: string;
    challenge?: string;
    icon?: string;
    instruction?: string;
    detourA?: {
      challenge: string;
      icon: string;
      instruction: string;
      title: string;
    };
    detourB?: {
      challenge: string;
      icon: string;
      instruction: string;
      title: string;
    };
    intro?: {
      challenge: string;
      instruction: string;
      icon: string;
    };
  };
};

export const RouteInfo = (props: Props) => {
  const routeinfoText = {
    name: `${props.data.name}`,
    challenge: `${props.data.challenge}`,
    instruction: `${props.data.instruction}`,
    icon: `${props.data.icon}`,
  };
  return (
    <div className='task route-info'>
      <div>
        <strong>{routeinfoText.name}</strong>
      </div>
      <div
        className='challenge'
        dangerouslySetInnerHTML={{
          __html: `${routeinfoText.challenge}`,
        }}
      />
      <div className='instruction'>
        <div className='icon'>{routeinfoText?.icon}</div>
        {routeinfoText.instruction.length > 0 && (
          <div
            className='direction'
            dangerouslySetInnerHTML={{
              __html: `${routeinfoText.instruction}`,
            }}
          />
        )}
      </div>
    </div>
  );
};
