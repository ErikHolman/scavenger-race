import { CssVarsProvider } from '@mui/joy/styles';
import Login from './views/login';
import './App.css';
import '@fontsource/inter';
import './api/api';

export default function App() {
  return (
    <CssVarsProvider>
      <Login />
    </CssVarsProvider>
  );
}
