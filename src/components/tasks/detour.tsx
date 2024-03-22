import './detour.scss';

export const Detour = (props) => {
  const detourText = {
    title: `${props.data.name}`,
    intro: {
      challenge: `${props.data.intro.challenge}`,
      instruction: `${props.data.intro.instruction}`,
    },
    detourA: {
      title: `${props.data.detourA.title}`,
      challenge: `${props.data.detourA.challenge}`,
      instruction: `${props.data.detourA.instruction}`,
    },
    detourB: {
      title: `${props.data.detourB.title}`,
      challenge: `${props.data.detourB.challenge}`,
      instruction: `${props.data.detourB.instruction}`,
    },
  };
  return (
    <div className='task detour'>
      <div className='title'>
        <strong>{detourText.title}</strong>
      </div>
      <div
        className='intro'
        dangerouslySetInnerHTML={{
          __html: `${detourText.intro.challenge}`,
        }}
      />
      <div className='instruction'>
        <div className='icon'>{props.data.intro?.icon}</div>
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
            <div className='icon'>{props.data.detourA?.icon}</div>
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
            <div className='icon'>{props.data.detourB?.icon}</div>
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
