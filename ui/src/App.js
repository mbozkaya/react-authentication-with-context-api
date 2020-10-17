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


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <AuthRoute path='/dashboard' element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
