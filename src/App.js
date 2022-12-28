import React from 'react'
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <GlobalStyle />
      <RoutesApp />
    </AuthProvider>
  )
}

export default App;