import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function HomePage() {
    return (
        <AuthContext.Consumer>
            {
                ({ authorize }) => (
                    <div className="App">
                        <header className="App-header">
                            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                            <p>Welcome to Home HomePage</p>
                            {authorize ? <Link className="App-link" to="/dashboard">Dashboard</Link> : <Link className="App-link" to="/login">Login</Link>}
                        </header>
                    </div>
                )
            }
        </AuthContext.Consumer>

    );
}

export default HomePage;