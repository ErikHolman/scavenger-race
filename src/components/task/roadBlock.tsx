import './roadBlock.scss';

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

export const RoadBlock = (props: Props) => {
  const roadblockText = {
    name: `${props.data.name}`,
    challenge: `${props.data.challenge}`,
    icon: `${props.data.icon}`,
    instruction: `${props.data.instruction}`,
  };
  return (
    <div className='task road-block'>
      <div>
        <strong>{roadblockText.name}</strong>
      </div>
      <div
        className='challenge'
        dangerouslySetInnerHTML={{
          __html: `${roadblockText.challenge}`,
        }}
      />

      <div className='instruction'>
        <div className='icon'>{roadblockText?.icon}</div>
        {roadblockText.instruction.length > 0 && (
          <div
            className='direction'
            dangerouslySetInnerHTML={{
              __html: `${roadblockText.instruction}`,
            }}
          />
        )}
      </div>
    </div>
  );
};
