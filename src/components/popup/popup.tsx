import './popup.scss';

type Props = {
  taskType: string;
  taskTitle: string;
  popBody: string;
  popFooter?: {
    instruction?: string;
    startBtnTxt?: string;
  };
};

export const Popup = (props: Props) => {
  const title = props.taskTitle;
  const bodyContent = props.popBody;
  const footerContent = props.popFooter;
  const taskType = props.taskType;

  return (
    <div className='popup-base'>
      <div className='popup-header'>
        <h3>{title}</h3>
      </div>
      <div className='popup-body'>{bodyContent}</div>
      {taskType == 'detour' && <div>BUTTONS</div>}
      {taskType != 'detour' && (
        <div className='popup-footer'>
          {footerContent?.instruction - footerContent?.startBtnTxt}
        </div>
      )}
    </div>
  );
};
