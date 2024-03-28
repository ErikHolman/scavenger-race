import './App.css';
import { Login } from './views/login';
import { RaceAdmin } from './views/admin/admin';

function App() {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <RaceAdmin /> : <Login />}</>;
}

export default App;
