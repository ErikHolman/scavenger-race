import './addElementButton.scss';
import { Link } from 'react-router-dom';

type Props = { type: string };

export const AddElement = (props: Props) => {
  const currentType = props.type;
  return (
    <>
      <div className='new-item'>
        <Link
          to={`/${currentType}/new`}
          className={`new-${currentType} button`}
        >
          <div className='button-text'>+</div>
        </Link>
      </div>
    </>
  );
};
