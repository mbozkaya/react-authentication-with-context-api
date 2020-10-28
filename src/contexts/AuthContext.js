import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router';
import MockApi from '../components/MockApi';


const AuthContext = React.createContext();

const AuthProvider = props => {
    const [contextState, setContextState] = useState({
        authorize: false,
        checkAuth: false,
        backdrop: false,
        error: false,
        success: false,
    });

    const { children } = props;
    const mockApi = new MockApi(JSON.parse(localStorage.getItem('mockApiUsers')) || { username: 'test@test.com', password: 'test123' }, 1000);

    const onLogin = model => {
        setContextState({
            ...contextState,
            backdrop: true,
        });
        mockApi.authenticate(model.email, model.password)
            .then(response => {
                if (response.error === false) {
                    localStorage.setItem('email', model.email);
                    localStorage.setItem('password', model.password);
                    setContextState({
                        authorize: true,
                        checkAuth: true,
                        backdrop: false,
                        error: false,
                    });
                    console.clear();
                } else {
                    setContextState({
                        authorize: false,
                        checkAuth: true,
                        backdrop: false,
                        error: true,
                    });
                }
            });
    };

    const onLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        setContextState({
            ...contextState,
            authorize: false,
            checkAuth: true,
        });
    };

    const signIn = model => {
        setContextState({
            ...contextState,
            backdrop: true,
        });
        mockApi.signInUser(model.email, model.password).then(response => {
            if (response && response.error === false) {
                setContextState({
                    ...contextState,
                    backdrop: false,
                    success: true,
                    error:false,
                });
            } else {
                setContextState({
                    ...contextState,
                    backdrop: false,
                    error: true,
                    success: false,
                });
            }
        });
    }

    useLayoutEffect(() => {
        const auth = mockApi.checkAuthenticate();
        if (auth !== contextState.authorize) {
            setContextState({
                ...contextState,
                authorize: auth,
                checkAuth: true,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authorize: contextState.authorize,
                checkAuth: contextState.checkAuth,
                onLogin,
                onLogout,
                backdrop: contextState.backdrop,
                error: contextState.error,
                success:contextState.success,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const AuthRoute = ({ component: Component, ...rest }) => (
    <AuthContext.Consumer>
        {({ authorize, checkAuth }) => {
            let content = '';

            if (authorize) {
                content = (
                    <Route
                        render={props => (
                            <Component {...props} />
                        )}
                        {...rest}
                    />
                );
            } else if (checkAuth && !authorize) {
                console.log('You must be login')
                content = <Navigate to="/" />;
            }
            return content;
        }}
    </AuthContext.Consumer>
);

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider, AuthRoute };

