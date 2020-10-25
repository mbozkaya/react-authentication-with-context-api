import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthRoute } from './contexts/AuthContext';
import HomePage from './views/Homepage';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import theme from './theme';
import GlobalStyles from './components/GlobalStyles';
import Blockui from './components/Blockui';
import SignIn from './views/SignIn';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Blockui />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<SignIn />} />
            <AuthRoute path='/dashboard' element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
