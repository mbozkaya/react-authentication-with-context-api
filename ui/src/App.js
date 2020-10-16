import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { createBrowserHistory as History } from 'history';
import { AuthProvider, AuthContext, AuthRoute } from './contexts/AuthContext';
import HomePage from './views/Homepage';
import Dashboard from './views/Dashboard';
import Login from './views/Login';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthContext.Consumer>
          {
            () => (
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <AuthRoute path='/dashboard' element={<Dashboard />} />
                {/* <Route path='/login' />
                <Route path='/loggedIn' /> */}
              </Routes>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
