import './fast.scss';

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

export const Fast = (props: Props) => {
  const fastText = {
    name: `${props.data.name}`,
    challenge: `${props.data.challenge}`,
    instruction: `${props.data.instruction}`,
    icon: `${props.data.icon}`,
  };
  return (
    <div className='task fast'>
      <div>
        <strong>{fastText.name}</strong>
      </div>
      <div
        className='challenge'
        dangerouslySetInnerHTML={{
          __html: `${fastText.challenge}`,
        }}
      />

      <div className='instruction'>
        <div className='icon'>{fastText?.icon}</div>
        {fastText.instruction.length > 0 && (
          <div
            className='direction'
            dangerouslySetInnerHTML={{
              __html: `${fastText.instruction}`,
            }}
          />
        )}
      </div>
    </div>
  );
};
