import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { makeStyles } from '@material-ui/core';

const useStyles =  makeStyles((theme) => ({
    wrapper: {
        paddingLeft:theme.spacing(3),
    }
  }));

function HomePage() {
    const styles = useStyles();
   
    return (
        <AuthContext.Consumer>
            {
                ({ authorize }) => (
                    <div className="App">
                        <header className="App-header">
                            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                            <p>Welcome to Home HomePage</p>
                            {authorize ?
                                <Link className="App-link" to="/dashboard">Dashboard</Link>
                                : (<div>
                                    <Link className="App-link"  to="/login">Login</Link>
                                    <Link className={`App-link ${styles.wrapper}`} to="/signin">Signin</Link>
                                </div>)}
                        </header>
                    </div>
                )
            }
        </AuthContext.Consumer>

    );
}

export default HomePage;