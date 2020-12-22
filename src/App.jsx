import React from 'react';
import Main from './Views/Main';
import GlobalStyles from './Styled/Global/GlobalStyles';
import Login from './Views/Login';
import Register from './Views/Register';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './Routes/PrivateRoutes/AuthenticatedRoute';

const App = () => {
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
