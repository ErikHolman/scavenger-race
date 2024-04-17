import './detour.scss';

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

export const Detour = (props: Props) => {
  const detourText = {
    title: `${props.data.name}`,
    intro: {
      challenge: `${props.data.intro!.challenge}`,
      instruction: `${props.data.intro!.instruction}`,
      icon: `${props.data.intro!.icon}`,
    },
    detourA: {
      title: `${props.data.detourA!.title}`,
      challenge: `${props.data.detourA!.challenge}`,
      instruction: `${props.data.detourA!.instruction}`,
      icon: `${props.data.detourA!.icon}`,
    },
    detourB: {
      title: `${props.data.detourB!.title}`,
      challenge: `${props.data.detourB!.challenge}`,
      instruction: `${props.data.detourB!.instruction}`,
      icon: `${props.data.detourB!.icon}`,
    },
  };
  return (
    <div className='task detour'>
      <div className='title'>
        <strong>{detourText.title}</strong>
      </div>
      <div
        className='challenge'
        dangerouslySetInnerHTML={{
          __html: `${detourText.intro.challenge}`,
        }}
      />
      <div className='instruction'>
        <div className='icon'>{detourText.intro?.icon}</div>
        <div
          className='direction'
          dangerouslySetInnerHTML={{
            __html: `${detourText.intro.instruction}`,
          }}
        />
      </div>
      <div className='choice'>
        <div className='choice-title'>
          <strong>{detourText.detourA.title}</strong>
        </div>
        <div className='choice-text'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${detourText.detourA.challenge}`,
            }}
          />
          <div className='choice-instruction'>
            <div className='icon'>{detourText.detourA?.icon}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${detourText.detourA.instruction}`,
              }}
            />
          </div>
        </div>
      </div>
      <div className='choice'>
        <div className='choice-title'>
          <strong>{detourText.detourB.title}</strong>
        </div>
        <div className='choice-text'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${detourText.detourB.challenge}`,
            }}
          />
          <div className='choice-instruction'>
            <div className='icon'>{detourText.detourB?.icon}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${detourText.detourB.instruction}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
