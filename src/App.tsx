import './App.css';
import { User, Roles } from './types/users';
import { Login } from '@views/login';

function App() {
  console.log('users', User);
  console.log('roles', Roles);
  return (
    <>
      <Login />
    </>
  );
}

export default App;
