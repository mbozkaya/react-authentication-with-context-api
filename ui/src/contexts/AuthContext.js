import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router';
import MockApi from '../components/MockApi';


const AuthContext = React.createContext();

const AuthProvider = props => {
    const [contextState, SetContextState] = useState({
        authorize: false,
        checkAuth: false,
    });

    const { children } = props;
    const mockApi = new MockApi({ username: 'test@test.com', password: 'test123' }, 1000);

    const onLogin = model => {
        console.log(model);
        mockApi.authenticate(model.email, model.password)
            .then(response => {
                if (response.error === false) {
                    localStorage.setItem('email', model.email);
                    localStorage.setItem('password', model.password);
                    SetContextState({
                        authorize: true,
                        checkAuth: true,
                    })
                } else {
                    SetContextState({
                        authorize: false,
                        checkAuth: true,
                    })
                }

            })
    }

    const onLogout = () => {

        localStorage.removeItem('email');
        localStorage.removeItem('password');
        SetContextState({
            authorize: false,
            checkAuth: true,
        })
    }

    useLayoutEffect(() => {
        const auth = mockApi.checkAuthenticate();
        if (auth !== contextState.authorize) {
            SetContextState({
                authorize: auth,
                checkAuth: true,
            });
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                authorize: contextState.authorize,
                checkAuth: contextState.checkAuth,
                onLogin,
                onLogout,
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

