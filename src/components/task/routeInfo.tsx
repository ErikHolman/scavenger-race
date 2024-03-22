import './routeInfo.scss';

export const RouteInfo = (props) => {
  const detourText = {
    challenge: `${props.data.challenge}`,
    instruction: `${props.data.instruction}`,
  };
  return (
    <div className='task route-info'>
      <div>
        <strong>{props.data.name}</strong>
      </div>
      <div
        className='challenge'
        dangerouslySetInnerHTML={{
          __html: `${detourText.challenge}`,
        }}
      />
      <div className='instruction'>
        <div className='icon'>{props.data?.icon}</div>
        {props.data.instruction.length > 0 && (
          <div
            className='direction'
            dangerouslySetInnerHTML={{
              __html: `${detourText.instruction}`,
            }}
          />
        )}
      </div>
    </div>
  );
};
