import React, {useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router';


const AuthContext = React.createContext();

const AuthProvider = props => {

    const [contextState, SetContextState] = useState({
        authorize: false,
    });

    const { children } = props;

    const onLogin = model => {
        console.log(model);
        //Go Service with model and take authentication 
        // localStorage.setItem('token', data.token);
        // localStorage.setItem('ug', data.guid);
        // localStorage.setItem('user', JSON.stringify(data));
    }

    const onLogout = () => {

        // localStorage.removeItem('token');
        // localStorage.removeItem('ug');
        // localStorage.removeItem('user');

        // SetContextState({
        //     authorize: false,
        // });
    }


    useLayoutEffect(() => {
        //Check authentication from api

        // setTimeout(() => {
        //     SetContextState({
        //         authorize: true,
        //     })
        // }, 300);
    });

    return (
        <AuthContext.Provider
            value={{
                authorize: contextState.authorize,
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
        {({ authorize }) => {
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
            } else {
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

