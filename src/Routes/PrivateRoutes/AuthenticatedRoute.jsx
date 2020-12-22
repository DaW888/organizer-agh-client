import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStore } from '../../SweetState/store';

const AuthenticatedRoute = ({ children, ...rest }) => {
    const [stateStore] = useStore();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                stateStore.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AuthenticatedRoute;
