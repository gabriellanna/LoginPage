import React from 'react'
import RoutesApp from './routes';
import GlobalStyle from './styles/global';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <RoutesApp />
    </>
  )
}

export default App;