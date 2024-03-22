import './addElementButton.scss';
import { Link } from 'react-router-dom';

export const AddElement = (props) => {
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
