import React from 'react';
import Main from './Views/Main';
import GlobalStyles from './Styled/Global/GlobalStyles';
import Login from './Views/Login';
import Register from './Views/Register';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './Routes/PrivateRoutes/AuthenticatedRoute';
import axios from 'axios';
import { useStore } from './SweetState/store';

const App = () => {
    // sweet state
    const [, actionsStore] = useStore();

    // axios interceptors
    axios.interceptors.request.use(
        req => {
            return req;
        },
        err => {
            return Promise.reject(err);
        }
    );

    axios.interceptors.response.use(
        res => {
            return res;
        },
        err => {
            if (err.response.status === 401) {
                actionsStore.logout();
            }

            return Promise.reject(err);
        }
    );

    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <AuthenticatedRoute path="/">
                        <Main />
                    </AuthenticatedRoute>
                </Switch>
            </Router>
        </>
    );
};

export default App;
