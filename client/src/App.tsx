import { CssVarsProvider } from '@mui/joy/styles';
import Login from './views/login';
import './App.css';
import '@fontsource/inter';
import './util/apiClient';
import Tasks from './views/tasks';

export default function App() {
  return (
    <CssVarsProvider>
      <Login />
      <Tasks />
    </CssVarsProvider>
  );
}
