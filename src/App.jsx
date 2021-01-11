import React from 'react';
import Main from './Views/Main';
import GlobalStyles from './Styled/Global/GlobalStyles';
import Login from './Views/Login';
import Register from './Views/Register';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './Routes/PrivateRoutes/AuthenticatedRoute';
import axios from 'axios';
import { useStore } from './SweetState/store';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './CONSTS/THEMES';
import Settings from './Styled/Sites/Settings';

const App = () => {
    // sweet state
    const [stateStore, actionsStore] = useStore();
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
        <ThemeProvider theme={stateStore.isLightTheme ? light : dark}>
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
                        <AuthenticatedRoute exact path="/">
                            <Main />
                        </AuthenticatedRoute>
                        <AuthenticatedRoute exact path="/settings">
                            <Settings />
                        </AuthenticatedRoute>
                    </Switch>
                </Router>
            </>
        </ThemeProvider>
    );
};

export default App;
