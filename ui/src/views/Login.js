import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
    })
    return (
        <AuthContext.Consumer>
            {({ authorize, onLogin }) => (
                (authorize ? <Navigate to='/dashboard' /> :
                    <div>
                        <p>Login Page</p>
                        <form onSubmit={e => {
                            e.preventDefault();
                            if (true) {//Validation
                                const { ...model } = loginState;
                                onLogin(model);
                                console.log(model);
                            }
                            return false;
                        }}>
                            <input type="text" name="email" required onChange={e => setLoginState({
                                ...loginState,
                                email: e.target.value,
                            })} title="email" placeholder="email" />
                            <br />
                            <input type="password" name="password" required onChange={e => setLoginState({
                                ...loginState,
                                password: e.target.value,
                            })} title="password" placeholder="password" />
                            <br />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                )
            )}
        </AuthContext.Consumer>
    );
}

export default Login;