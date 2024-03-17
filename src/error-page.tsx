import { useRouteError } from 'react-router-dom';
import './error-page.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <h1>Uhhhh...</h1>
      <p>Screenshot this and send it to Erik: </p>
      <span>
        <strong>{error.status}</strong> (<strong>{error.data}</strong>)
      </span>
    </div>
  );
}
