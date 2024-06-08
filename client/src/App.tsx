import { CssVarsProvider } from '@mui/joy/styles';
import Login from './views/login';
import './App.css';
import '@fontsource-variable/inter';
import './util/apiClient';
import { Button } from '@mui/joy';

export default function App() {
  return (
    <CssVarsProvider>
      <Login />
      <Button component='a' href='/tasks'>
        DEV SKIP LOGIN
      </Button>
    </CssVarsProvider>
  );
}
